package com.example.store.service;

import com.example.store.pojo.Customer;
import jakarta.servlet.http.HttpServletRequest;

import java.util.Date;

public interface IUserService {

    void registration(Customer customer);

    Customer login(Customer customer);

    void changePassword(String oldPassword, String newPassword, String confirm, String username);

    Customer getCustomerInfoById(Integer cid);

    void updateCustomerInformation(Integer cid, String username, Customer customer);

    void updateAvatar(Integer cid, String avatar, String username);
}
