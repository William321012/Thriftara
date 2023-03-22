package com.example.store.mapper;

import com.example.store.pojo.Order;
import com.example.store.pojo.OrderItem;
import org.apache.ibatis.annotations.Mapper;

import java.util.Date;
import java.util.List;

@Mapper
public interface OrderMapper {

    Integer createOrder(Order order);
    Integer createOrderItem(OrderItem orderItem);
    Order getOrderByOid(Integer oid);
    Integer updateOrder(Date payTime, String modifiedUser, Date modifiedTime, Integer oid);
    List<OrderItem> getOrderItemByOid(Integer oid);

    List<Order> displayAllOrdersByCid(Integer cid);

    List<Order> getAllOrders();

    Integer deleteOrder(Integer oid);

    Integer deleteOrderItem(Integer oid);

}
