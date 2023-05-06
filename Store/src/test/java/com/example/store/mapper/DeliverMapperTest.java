package com.example.store.mapper;

import com.example.store.vo.DeliverVO;
import jakarta.annotation.Resource;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;
import java.util.List;

@SpringBootTest
public class DeliverMapperTest {

    @Resource
    DeliveryMapper deliveryMapper;

    @Test
    public void insert(){
        deliveryMapper.createDeliver(1,1,1,"1","1","1",1,"1",1,"1",1,1,1,new Date());
    }
    
    @Test
    public void get(){
        deliveryMapper.selectAllDeliverOfOneUser(4);
    }
}
