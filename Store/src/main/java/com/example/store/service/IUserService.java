package com.example.store.service;

import com.example.store.pojo.Customer;
import com.example.store.pojo.Product;
import com.example.store.vo.DeliverVO;
import jakarta.servlet.http.HttpServletRequest;

import java.util.Date;
import java.util.List;

public interface IUserService {

    void registration(Customer customer);

    Customer login(Customer customer);

    void changePassword(String oldPassword, String newPassword, String confirm, String username);

    Customer getCustomerInfoById(Integer cid);

    void updateCustomerInformation(Integer cid, String username, Customer customer);

    void updateAvatar(Integer cid, String avatar, String username);

    String getAvatar(Integer cid);

    List<Product> displayAllUserProduct(Integer cid);

    List<DeliverVO> selectAllDeliverOfOneUser(Integer cid);


}
