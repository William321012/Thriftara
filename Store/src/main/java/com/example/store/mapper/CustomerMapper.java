package com.example.store.mapper;

import com.example.store.pojo.Customer;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.Date;


@Mapper
public interface CustomerMapper {

    Integer createUser(Customer customer);

    Customer checkCustomerByUserName(@Param("username") String username);

    Integer updateCustomerPassword(@Param("cid")Integer id,@Param("password")String newPassword,@Param("modifiedUser")String modifiedUser, @Param("modifiedTime") Date modifiedTime);


    Customer checkCustomerById(Integer cid);

//    Integer updateCustomerInfo(@Param("cid")Integer cid, Customer customer);

    Integer updateCustomerInfo (Customer customer);

    Integer updateAvatar(Customer customer);
}


