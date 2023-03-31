package com.example.store.mapper;

import com.example.store.pojo.Product;
import org.apache.ibatis.annotations.Mapper;

import java.util.Date;
import java.util.List;

@Mapper
public interface ProductMapper {

    List<Product> selectTopProduct();

    Product getProductById(Integer id);

    Integer updateItemNum(Integer pid, String modifiedUser, Date modifiedTime, Integer num);

    List<Product> selectAllProduct();

    Integer uploadProduct(Product product);

    List<Product> getProductByCategory(String category);

    List<Product> getProductByFilter(String category, String[] brands, String[] sizes, String[] conditions, Integer[] genders,Integer priceOrder);
}
