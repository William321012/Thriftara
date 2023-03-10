package com.example.store.mapper;

import com.example.store.pojo.Order;
import com.example.store.pojo.OrderItem;
import jakarta.annotation.Resource;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class OrderMapperTest {

    @Resource
    OrderMapper orderMapper;

    @Test
    public void insertOrder(){
        Order order = new Order();
        order.setCreatedUser("admin");
        orderMapper.createOrder(order);
    }

    @Test
    public void insertOrderItem(){
        OrderItem orderItem =new OrderItem();
        orderItem.setCreatedUser("test1");
        orderMapper.createOrderItem(orderItem);
    }
}
