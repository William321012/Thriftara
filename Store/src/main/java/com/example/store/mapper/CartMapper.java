package com.example.store.mapper;

import com.example.store.pojo.Cart;
import com.example.store.pojo.Product;
import com.example.store.vo.CartVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.Date;
import java.util.List;

@Mapper
public interface CartMapper {

    List<CartVO> displayAllProductsInTheCart(Integer cid);

    Integer deleteProductById(Integer id);

    //insert
    Cart checkProductIfIsInTheCart(Integer cid, Integer pid);

    //insert
    Integer updateNumById(Integer id, Integer num, Long price, String modifiedUser, Date modifiedTime);

    //insert
    Integer insertProductInTheCart(Cart cart);

    Cart getCartById(Integer id);

    List<CartVO> displayAllChosenInTheOrder(Integer[] ids);


}
