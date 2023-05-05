package com.example.store.service.impl;

import com.example.store.mapper.*;
import com.example.store.pojo.*;
import com.example.store.service.IOrderService;
import com.example.store.service.exception.*;
import com.example.store.vo.CartVO;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Service
public class OrderServiceImpl implements IOrderService {

    @Resource
    private AddressMapper addressMapper;
    @Resource
    private AddressServiceImpl addressService;
    @Resource
    private OrderMapper orderMapper;
    @Resource
    private CartMapper cartMapper;

    @Resource
    private ProductMapper productMapper;

    @Resource
    private CartServiceImpl cartService;

    @Resource
    private DeliveryMapper deliveryMapper;



    /**
     *
     * @param aid
     * @param username
     * @param ids cart id
     * @param cid customer id
     * @return
     */
    @Override
    @Transactional
    //ids= cart id = how many item in cart that the user selected to pay
    public Order createOrder(Integer aid, String username, Integer cid, Integer[] ids) {

        Long total=0l;
        Address address = addressService.selectAddressByAid(aid, cid);
        if(address==null){
            throw new AddressNotFoundException("this address is illegal");
        }

        //  get the selected item
        List<CartVO> cartVOS = cartService.displayAllChosenInTheOrder(ids,cid);
        for(CartVO c:cartVOS){
            Integer pid =c.getPid();
            //product=cartVO
            Product product = productMapper.getProductById(pid);

            if(product==null){
                throw new ProductIsNullException("illegal product");
            }

            if(c.getNum()>product.getNum()){
                throw new ProductInsufficientException("Insufficient num of product");
            }
            Long sum = c.getSum();
            total+=sum;
        }

        Order order = new Order();
        order.setCid(cid);
        order.setReceiverName(address.getName());
        order.setReceiverPhone(address.getPhone());
        order.setReceiverAddress(address.getAddress());
        order.setReceiverCity(address.getCity());
        order.setReceiverState(address.getState());
        order.setReceiverZip(address.getZip());
        order.setTotalPrice(total);
        order.setStatus(0);
        order.setOrderTime(new Date());
        order.setCreatedUser(username);
        order.setCreateTime(new Date());
        order.setModifiedUser(username);
        order.setModifiedTime(new Date());

        Integer order1 = orderMapper.createOrder(order);
        if(order1 !=1){
            throw new InsertException("insertion failed");
        }

        //create data from order_item detail
        for(CartVO c:cartVOS){
//            private Integer id;
//            private Integer oid;
//            private Integer pid;
//            private String title;
//            private String image;
//            private Long unitPrice;
//            private Integer num;
            OrderItem orderItem= new OrderItem();
            orderItem.setOid(order.getOid());
            orderItem.setPid(c.getPid());
            orderItem.setTitle(c.getTitle());
            orderItem.setImage(c.getImage());
            orderItem.setUnitPrice(c.getUnitPrice());
            orderItem.setNum(c.getNum());
            orderItem.setCreatedUser(username);
            orderItem.setCreateTime(new Date());
            orderItem.setModifiedUser(username);
            orderItem.setModifiedTime(new Date());

            Integer orderItem1 = orderMapper.createOrderItem(orderItem);
            if(orderItem1!=1){
                throw new InsertException("insertion failed");
            }
        }

        return order;
    }

    @Override
    public Order getOrder(Integer oid, Integer cid) {
        Order orderByOid = orderMapper.getOrderByOid(oid);
        if(orderByOid == null){
            throw new OrderNotFoundException("order not found");
        }

        if(orderByOid.getCid()!=cid){
            throw new OrderNotFoundException("order is illegal");
        }

        return orderByOid;
    }

    @Override
    @Transactional
    public void updateOrder(Integer cid, Integer orderId, String username) {

        Order orderByOid = orderMapper.getOrderByOid(orderId);
        if(orderByOid == null){
            throw new OrderNotFoundException("order is not found");
        }

        if(orderByOid.getCid()!=cid){
            throw new OrderNotFoundException("illegal order");
        }

        List<OrderItem> orderItemByOid = orderMapper.getOrderItemByOid(orderId);


        //iterate each item from this order
        for(OrderItem o : orderItemByOid){
            if(o==null){
                throw new OrderNotFoundException("order item is not found");
            }

            Integer pid = o.getPid();
            Product product = productMapper.getProductById(pid);
            if(product == null){
                throw new ProductIsNullException("product is null");
            }

            Integer num = o.getNum();
            product.setNum(product.getNum()-num);
            product.setSale(product.getSale()+num);

            Integer newNum= product.getNum();
            Integer newSale=product.getSale();
            if(newNum<0){
                throw new ProductInsufficientException("insufficient product");
            }

            Integer integer = productMapper.updateItemNum(pid, username, new Date(), newNum,newSale);
            if(integer!=1){
                throw new UpdateInforException("update failed");
            }

            Integer integer1 = cartMapper.deleteProductByPidAndCid(cid, pid);
            if(integer1 !=1){
                throw new DeleteException("deletion failed");
            }

//            Integer createDeliver(int pid, int cid, int oid, String address, String city, String state, int zip, String name, double total, String image, int num, double unit, int statue);

            Integer deliver = deliveryMapper.createDeliver(pid, product.getCid(), orderId, orderByOid.getReceiverAddress(), orderByOid.getReceiverCity(), orderByOid.getReceiverState(),
                    orderByOid.getReceiverZip(), orderByOid.getReceiverName(), orderByOid.getTotalPrice(), o.getImage(), o.getNum(), o.getUnitPrice(), 0,orderByOid.getOrderTime());

            if(deliver!=1){
                throw new InsertException("insertion failed");
            }

        }

        orderMapper.updateOrder(new Date(),username, new Date(), orderId);

    }

    @Override
    public List<OrderItem> getOrderItemByOid(Integer oid, Integer cid, String username) {
        Order orderByOid = orderMapper.getOrderByOid(oid);
        if(orderByOid.getCid()!=cid){
            throw new OrderNotFoundException("illegal order");
        }

        List<OrderItem> orderItemByOid = orderMapper.getOrderItemByOid(oid);

        return orderItemByOid;
    }

    @Override
    public List<Order> displayAllOrdersByCid(Integer cid) {
        List<Order> orders = orderMapper.displayAllOrdersByCid(cid);
        if(orders == null){
            throw new OrderNotFoundException("order is not found");
        }
        return orders;
    }

}
