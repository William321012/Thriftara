package com.example.store.mapper;

import com.example.store.pojo.Product;
import jakarta.annotation.Resource;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class ProductMapperTest {

    @Resource
    ProductMapper productMapper;

//    @Test
//    public void topList(){
//        List<Product> products = productMapper.selectTopProduct();
//
//    }
}
