package com.example.store.service.impl;

import com.example.store.mapper.AddressMapper;
import com.example.store.mapper.CartMapper;
import com.example.store.mapper.OrderMapper;
import com.example.store.mapper.ProductMapper;
import com.example.store.pojo.*;
import com.example.store.service.IOrderService;
import com.example.store.service.exception.AddressNotFoundException;
import com.example.store.service.exception.InsertException;
import com.example.store.service.exception.ProductInsufficientException;
import com.example.store.service.exception.ProductIsNullException;
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
    private CartServiceImpl cartService;
    @Resource
    private ProductMapper productMapper;

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


}
