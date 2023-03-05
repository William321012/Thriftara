package com.example.store.service;

import com.example.store.mapper.CartMapper;
import com.example.store.pojo.Cart;
import com.example.store.pojo.Product;
import jakarta.annotation.Resource;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class CartServiceTest {

    @Resource
    ICartService cartService;

    @Test
    public void insertProduct(){
        cartService.insertProductToTheCart(4,3,"Admin",3);
    }

    @Test
    public void addNumFromTheCart(){
        cartService.addNumFromTheCart(2,4,"admin");
    }

    @Test
    public void minusNumFromTheCart(){
        cartService.minusNumFromTheCart(2,4,"admin");
    }
}
