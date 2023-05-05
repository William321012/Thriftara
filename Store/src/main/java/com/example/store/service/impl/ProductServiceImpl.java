package com.example.store.service.impl;

import com.example.store.mapper.ProductMapper;
import com.example.store.pojo.Product;
import com.example.store.service.IProductService;
import com.example.store.service.exception.DeleteException;
import com.example.store.service.exception.InsertException;
import com.example.store.service.exception.ProductIsNullException;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ProductServiceImpl implements IProductService {

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
        Product product = productMapper.getProductById(id);
        if(product==null){
            throw new ProductIsNullException("illegal product");
        }
        return product;

    }

    public List<Product> getAllProduct() {
        List<Product> products = productMapper.selectAllProduct();
        for(Product p:products){
            p.setCreatedUser(null);
            p.setCreateTime(null);
            p.setModifiedTime(null);
            p.setModifiedUser(null);
        }
        return products;
    }

    @Override
    @Transactional
    public void uploadProduct(Product product) {
        Integer integer = productMapper.uploadProduct(product);
        if(integer!=1){
            throw new InsertException("insertion failed");
        }
    }

    @Override
    public void deleteProduct(Integer cid, Integer pid) {
        Product productById = productMapper.getProductById(pid);
        if(productById.getCid()!=cid){
            throw new ProductIsNullException("illegal product");
        }

        Integer integer = productMapper.deleteProduct(cid, pid);
        if(integer!=1){
            throw new DeleteException("deletion failed");
        }
    }

    @Override
    public List<Product> getProductByCategory(String category) {
        List<Product> productByCategory = productMapper.getProductByCategory(category);
        return productByCategory;
    }

    @Override
    public List<Product> getProductByFilter(String category, String[] brands, String[] sizes, String[] conditions, Integer[] genders, Integer priceOrder, Integer priceRange) {


        List<Product> productByFilter = productMapper.getProductByFilter(category, brands, sizes, conditions, genders,priceOrder, priceRange);
        return productByFilter;

    }
}
