package com.example.store.service;

import com.example.store.service.impl.ProductServiceImpl;
import jakarta.annotation.Resource;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class ProductServiceTest {
    @Resource
    ProductServiceImpl productService;

    @Test
    public void getProductByFilter(){
        productService.getProductByFilter("Tops",new String[]{"Nike"}, new String[]{"2"},new String[]{"1"}, new Integer[]{1},0, 6);
    }
}
