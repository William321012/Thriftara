package com.example.store.service.impl;

import com.example.store.mapper.CustomerMapper;
import com.example.store.pojo.Customer;
import com.example.store.service.IUserService;
import com.example.store.service.exception.InsertException;
import com.example.store.service.exception.PasswordNotMatchException;
import com.example.store.service.exception.UserNotExistException;
import com.example.store.service.exception.UsernameDuplicatedException;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;

import java.util.Date;
import java.util.UUID;

@Service
public class UserServiceImpl implements IUserService {
    
    @Resource
    private CustomerMapper customerMapper;
    
    @Override
    public void registration(Customer customer) {

        Customer customerVerification = customerMapper.checkCustomerByUserName(customer.getUsername());


        if(customerVerification != null){
            throw new UsernameDuplicatedException("username already exist");
        }

        String oldPassword = customer.getPassword();
        String salt = UUID.randomUUID().toString().toUpperCase();
        String md5 = getMD5(oldPassword, salt);

        customer.setSalt(salt);
        customer.setPassword(md5);

        Date date = new Date();

        customer.setIsDelete(0);
        customer.setCreatedUser(customer.getUsername());
        customer.setCreateTime(date);
        customer.setModifiedUser(customer.getUsername());
        customer.setModifiedTime(date);

        Integer count = customerMapper.createUser(customer);

        //test

        if(count!=1){
            throw new InsertException("unknown error during insertion ");
        }
    }

    @Override
    public Customer login(Customer customer) {
        Customer customer1 = customerMapper.checkCustomerByUserName(customer.getUsername());
        if(customer1==null || customer1.getIsDelete()==1){
            throw new UserNotExistException("User does not exist");
        }

        String salt = customer1.getSalt();

        String md5 = getMD5(customer.getPassword(),salt);

        if(!md5.equals(customer1.getPassword())){
            throw new PasswordNotMatchException("password does not match");
        }

        return customer1;



    }

    private String getMD5(String old, String salt){
        for(int i =0; i<3; i++){
            old=DigestUtils.md5DigestAsHex((salt+old+salt).getBytes()).toUpperCase();
        }
        return old;
    }


}
