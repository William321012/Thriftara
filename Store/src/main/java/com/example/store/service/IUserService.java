package com.example.store.service;

import com.example.store.pojo.Customer;

public interface IUserService {

    void registration(Customer customer);

    Customer login(Customer customer);

    void changePassword(String oldPassword, String newPassword, String confirm, String username);


}
