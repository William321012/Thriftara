package com.example.store.mapper;

import com.example.store.pojo.Customer;
import jakarta.annotation.Resource;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class UserMapperTests {

    @Resource
    CustomerMapper customerMapper;

    @Test
    public void check(){
        Customer sb = customerMapper.checkCustomerByUserName("sb");
        System.out.println(sb);

    }

    @Test
    public void insert(){
        Customer customer = new Customer();
        customer.setUsername("sb");
        customer.setPassword("sb");
        customerMapper.createUser(customer);

    }
}
