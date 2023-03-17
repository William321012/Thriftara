package com.example.store.service;

import com.example.store.pojo.Product;

import java.util.List;

public interface IProductService {
    List<Product> getTopList();

    Product getProductById(Integer id);

    List<Product> getAllProduct();

    void uploadProduct(Product product);
}
