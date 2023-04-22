package com.example.store.service.impl;

import com.example.store.mapper.CustomerMapper;
import com.example.store.pojo.Customer;
import com.example.store.pojo.Product;
import com.example.store.service.IUserService;
import com.example.store.service.exception.*;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.DigestUtils;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class UserServiceImpl implements IUserService {
    
    @Resource
    private CustomerMapper customerMapper;
    
    @Override
    @Transactional
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

        if(count!=1){
            throw new InsertException("unknown error during insertion ");
        }
    }

    @Override
    @Transactional
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

    @Transactional
    @Override
    public void changePassword(String oldPassword, String newPassword, String confirm, String username){

        Customer customer = customerMapper.checkCustomerByUserName(username);

        if(customer.getIsDelete()==1 || customer==null){
            throw new UserNotExistException("user does not exists");
        }

        String salt =customer.getSalt();
        String oldMd5 = getMD5(oldPassword, salt);

        if(!newPassword.equals(confirm)){throw new PasswordNotMatchException("password does not match");}

        if(!oldMd5.equals(customer.getPassword())){
            throw new PasswordNotMatchException("password does not match");
        }

        Integer cid = customer.getCid();

        String newMd5 = getMD5(newPassword, salt);

        Integer count = customerMapper.updateCustomerPassword(cid,newMd5,username,new Date());
        if(count!=1){
            throw new PasswordUpdateFailedException("password update failed");
        }

    }

    @Override
    @Transactional
    public Customer getCustomerInfoById(Integer cid) {

        Customer customer = customerMapper.checkCustomerById(cid);

        if(customer.getIsDelete()==1 || customer==null){
            throw new UserNotExistException("user does not exists");
        }

        Customer customer1 = new Customer();
        customer1.setEmail(customer.getEmail());
        customer1.setPhone(customer.getPhone());
        customer1.setGender(customer.getGender());
        customer1.setUsername(customer.getUsername());
        System.out.println(customer1);

        return customer1;

    }

    //the customer's object only have the data of email, phone and gender
    @Override
    @Transactional
    public void updateCustomerInformation(Integer cid, String username, Customer customer) {

        System.out.println(customer);
        customer.setModifiedTime(new Date());
        customer.setModifiedUser(username);
        customer.setCid(cid);

        Integer count = customerMapper.updateCustomerInfo(customer);
        if (count!=1){
            throw new UpdateInforException("update personal info failed");
        }
    }

    @Override
    public void updateAvatar(Integer cid, String avatar, String username) {
        Customer customer = customerMapper.checkCustomerById(cid);

        if(customer.getIsDelete()==1 || customer==null){
            throw new UserNotExistException("user does not exists");
        }

        Integer count = customerMapper.updateAvatar(cid, avatar, username, new Date());
        if (count!=1){
            throw new UpdateInforException("update personal info failed");
        }

    }

    @Override
    public String getAvatar(Integer cid) {
        Customer customer = customerMapper.checkCustomerById(cid);

        if(customer.getIsDelete()==1 || customer==null){
            throw new UserNotExistException("user does not exists");
        }

        String avatar = customer.getAvatar();
        return avatar;

    }

    @Override
    public List<Product> displayAllUserProduct(Integer cid) {
        Customer customer = customerMapper.checkCustomerById(cid);
        if(customer.getIsDelete()==1 || customer==null){
            throw new UserNotExistException("user does not exists");
        }
        List<Product> products = customerMapper.displayAllUserProduct(cid);
        return products;

    }


    private String getMD5(String old, String salt){
        for(int i =0; i<3; i++){
            old=DigestUtils.md5DigestAsHex((salt+old+salt).getBytes()).toUpperCase();
        }
        return old;
    }


}
