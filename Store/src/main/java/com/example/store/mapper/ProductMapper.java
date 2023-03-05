package com.example.store.mapper;

import com.example.store.pojo.Product;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductMapper {

    List<Product> selectTopProduct();

    Product selectProductById(Integer id);
}
