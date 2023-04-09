package com.example.store.mapper;

import com.example.store.pojo.Product;
import jakarta.annotation.Resource;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;
import java.util.List;

@SpringBootTest
public class ProductMapperTest {

    @Resource
    ProductMapper productMapper;

    @Test
    public void topList(){
        List<Product> products = productMapper.selectTopProduct();

    }

    @Test
    public void updateItemNum(){
        productMapper.updateItemNum(3,"admin",new Date(),8888);
    }
    
    @Test
    public void getAllProduct(){
        productMapper.selectAllProduct();
    }

    @Test
    public void uploadProduct(){
        Product product = new Product();
        product.setCid(4);
        product.setImage("aabb");
        Integer integer = productMapper.uploadProduct(product);
    }

    @Test
    public void getProductByCategory(){
        productMapper.getProductByCategory("Tops");
    }

    @Test
    public void getProductByFilter(){
        String[] brands= {};
//        String[] sizes= {"1"};
//        String[] conditions= {"1"};
//        Integer[] gender= {1};

        String[] sizes= {};
        String[] conditions= {};
        Integer[] gender= {};
        ;

        List<Product> tops = productMapper.getProductByFilter("Tops", brands, null, conditions, gender,1,1);
    }
}
