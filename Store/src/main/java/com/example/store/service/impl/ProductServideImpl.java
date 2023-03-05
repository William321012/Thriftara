package com.example.store.service.impl;

import com.example.store.mapper.ProductMapper;
import com.example.store.pojo.Product;
import com.example.store.service.IProductService;
import com.example.store.service.exception.ProductIsNullException;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServideImpl implements IProductService {

    @Resource
    ProductMapper productMapper;
    @Override
    public List<Product> getTopList() {
        List<Product> products = productMapper.selectTopProduct();
        for(Product p:products){
            p.setPriority(null);
            p.setCreatedUser(null);
            p.setCreateTime(null);
            p.setModifiedTime(null);
            p.setModifiedUser(null);
            p.setColor(null);
            p.setBrand(null);

        }
        return products;
    }

    @Override
    public Product getProductById(Integer id) {
        Product product = productMapper.selectProductById(id);
        if(product==null){
            throw new ProductIsNullException("illegal product");
        }
        return product;

    }
}
