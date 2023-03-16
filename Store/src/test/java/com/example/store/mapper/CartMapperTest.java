package com.example.store.mapper;

import com.example.store.pojo.Cart;
import com.example.store.pojo.Product;
import com.example.store.vo.CartVO;
import jakarta.annotation.Resource;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;
import java.util.List;

@SpringBootTest
public class CartMapperTest {

    @Resource
    CartMapper cartMapper;


    @Test
    public void insertProduct(){
        Cart cart = new Cart();
        cart.setCid(4);
        cart.setPid(3);;
        cart.setNum(5);
        cart.setPrice(500L);
        cartMapper.insertProductInTheCart(cart);
    }

    @Test
    public void updateProductByNum(){
        cartMapper.updateNumById(2,2,80000L,"admin",new Date());
    }

    @Test
    public void displayAllProductsInTheCart() {
        List<CartVO> cartVOS = cartMapper.displayAllProductsInTheCart(4);
        System.out.println(cartVOS.toString());

    }

    @Test
    public void checkProductIfIsInTheCart(){
        Cart cart = cartMapper.checkProductIfIsInTheCart(4, 3);
    }

    @Test
    public void displayAllChosenInTheOrder(){
        cartMapper.displayAllChosenInTheOrder(new Integer[]{1,2,3,60});
    }
    @Test
    public void getCart(){
        cartMapper.getCartById(2);
    }
}
