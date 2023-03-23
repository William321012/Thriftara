package com.example.store.service;

import com.example.store.pojo.Order;
import com.example.store.pojo.OrderItem;

import java.util.List;

public interface IOrderService {

    Order createOrder(Integer aid, String username, Integer cid, Integer[] pds);

    Order getOrder(Integer oid, Integer cid);

    void updateOrder(Integer cid, Integer orderId, String username);

    List<OrderItem> getOrderItemByOid(Integer oid, Integer cid, String username);

    List<Order> displayAllOrdersByCid(Integer cid);
}
