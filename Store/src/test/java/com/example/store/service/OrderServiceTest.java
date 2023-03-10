package com.example.store.service;

import com.example.store.service.impl.OrderServiceImpl;
import jakarta.annotation.Resource;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class OrderServiceTest {

    @Resource
    OrderServiceImpl orderService;

    @Test
    public void create(){
        Integer[] ids= new Integer[]{1,2,3};
        orderService.createOrder(26,"Admin",4, ids);
    }
}
