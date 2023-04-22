package com.example.store.mapper;

import com.example.store.pojo.Customer;
import com.example.store.pojo.Product;
import jakarta.annotation.Resource;
import org.junit.jupiter.api.Test;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest

public class UserMapperTests {

    @Resource
    CustomerMapper customerMapper;

    @Test
    public void check(){
        Customer sb = customerMapper.checkCustomerByUserName("sb2");
        System.out.println(sb);

    }

    @Test
    public void insert(){
        Customer customer = new Customer();
        customer.setUsername("sb");
        customer.setPassword("sb");
        customerMapper.createUser(customer);

    }

    @Test
    public void update(){
        Customer customer = new Customer();
        customer.setEmail("aaa");
        customer.setPhone("911");
        customer.setGender(2);
        customer.setUsername("aaa");
        customer.setCid(4);
        customerMapper.updateCustomerInfo(customer);
    }

    @Test
    public void displayAllUserProduct(){
        customerMapper.displayAllUserProduct(4);
    }
}

