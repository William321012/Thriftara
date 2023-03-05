package com.example.store.service;

import com.example.store.vo.CartVO;

import java.util.Date;
import java.util.List;

public interface ICartService {


    void insertProductToTheCart(Integer cid, Integer pid, String username, Integer amount);

    List<CartVO> displayAllProductInTheCart(Integer cid);

    Integer addNumFromTheCart(Integer id, Integer cid, String username);

    Integer minusNumFromTheCart(Integer id, Integer cid, String username);

}
