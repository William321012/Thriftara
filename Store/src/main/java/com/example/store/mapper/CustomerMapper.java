package com.example.store.mapper;

import com.example.store.pojo.Customer;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;


@Mapper
public interface CustomerMapper {

    Integer createUser(Customer customer);

    Customer checkCustomerByUserName(@Param("username") String username);
}
