package com.example.store.mapper;

import com.example.store.pojo.Order;
import com.example.store.pojo.OrderItem;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface OrderMapper {

    Integer createOrder(Order order);
    Integer createOrderItem(OrderItem orderItem);


}
