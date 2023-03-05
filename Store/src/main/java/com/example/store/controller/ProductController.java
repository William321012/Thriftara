package com.example.store.controller;

import com.example.store.pojo.Address;
import com.example.store.pojo.Product;
import com.example.store.service.IProductService;
import com.example.store.util.JsonResult;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController extends BaseController{

    @Resource
    IProductService productService;

    @RequestMapping("/toplist")
    public JsonResult<List<Product>> topList(){
        JsonResult<List<Product>> result = new JsonResult<>();

        List<Product> topList = productService.getTopList();

        result.setState(200);
        result.setMessage("success");
        result.setData(topList);
        return result;
    }

    @RequestMapping("/getProduct")
    public JsonResult<Product> getProduct(Integer id){
        JsonResult <Product> result = new JsonResult<>();

        Product product = productService.getProductById(id);

        result.setState(200);
        result.setMessage("success");
        result.setData(product);
        return result;
    }

}
