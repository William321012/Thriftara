package com.example.store.service.impl;

import com.example.store.mapper.CartMapper;
import com.example.store.mapper.ProductMapper;
import com.example.store.pojo.Cart;
import com.example.store.pojo.Product;
import com.example.store.service.ICartService;
import com.example.store.service.exception.CartNotFoundException;
import com.example.store.service.exception.InsertException;
import com.example.store.service.exception.ProductIsNullException;
import com.example.store.vo.CartVO;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Service
public class CartServiceImpl implements ICartService {

    @Resource
    private CartMapper cartMapper;

    @Resource
    private ProductMapper productMapper;

    /**
     *
     * @param cid customer id
     * @param pid product id
     * @param username
     * @param amount # of product
     */

    //using cid and pid find the id of the cart
    @Override
    public void insertProductToTheCart(Integer cid, Integer pid, String username, Integer amount) {

        //check if the product is already in the cart
        Cart cart = cartMapper.checkProductIfIsInTheCart(cid, pid);

        //product is not in the cart
        if(cart == null){
            Product product = productMapper.selectProductById(pid);
            if(product==null){
                throw new ProductIsNullException("illegal product");
            }

            Long price = product.getPrice();

            Cart cart1 = new Cart();
            cart1.setPid(pid);
            cart1.setCid(cid);
            cart1.setNum(amount);
            cart1.setPrice(amount*price);
            cart1.setCreatedUser(username);
            cart1.setCreateTime(new Date());
            cart1.setModifiedUser(username);
            cart1.setModifiedTime(new Date());

            Integer count = cartMapper.insertProductInTheCart(cart1);
            if(count !=1){
                throw new InsertException("insert failed");
            }
            //product is in the cart already
        }else{
            Product product = productMapper.selectProductById(pid);
            //int total=amount;
            int total =cart.getNum() + amount;
            Long price=product.getPrice()* total;
//            Integer count = cartMapper.updateNumById(cart.getId(), total, username, new Date());
            Integer count = cartMapper.updateNumById(cart.getId(), total, price, username, new Date());
            if(count !=1){
                throw new InsertException("insert failed");
            }
        }
    }

    @Override
    public List<CartVO> displayAllProductInTheCart(Integer cid) {
        List<CartVO> cartVOS = cartMapper.displayAllProductsInTheCart(cid);
        return cartVOS;
    }

    @Override
    @Transactional
    public Integer addNumFromTheCart(Integer id,Integer cid, String username) {

        Cart cart = cartMapper.getProductFromTheCartById(id);
        if(cart == null || (!(cart.getCid().equals(cid)))){
            throw new CartNotFoundException("illegal cart");
        }

        Integer pid = cart.getPid();
        Product product = productMapper.selectProductById(pid);
        Long price = product.getPrice();

        Integer cartNum = cart.getNum();
        Long cartPrice = cart.getPrice();

        Integer newCartNum=cartNum+1;
        Long newCartPrice = cartPrice+price;

        Integer integer = cartMapper.updateNumById(id, newCartNum, newCartPrice, username, new Date());
        if(integer!=1){
            throw new InsertException("insertion failed");
        }

        return newCartNum;

    }

    @Override
    public Integer minusNumFromTheCart(Integer id, Integer cid, String username) {
        Cart cart = cartMapper.getProductFromTheCartById(id);
        if (cart == null || (!(cart.getCid().equals(cid)))) {
            throw new CartNotFoundException("illegal cart");
        }

        Integer pid = cart.getPid();
        Product product = productMapper.selectProductById(pid);

        Long price = product.getPrice();

        Integer cartNum = cart.getNum();
        Long cartPrice = cart.getPrice();

        Integer newCartNum = cartNum - 1;
        Long newCartPrice = cartPrice - price;

        Integer integer = cartMapper.updateNumById(id, newCartNum, newCartPrice, username, new Date());
        if (integer != 1) {
            throw new InsertException("insertion failed");
        }

        return newCartNum;
    }

    @Override
    public List<CartVO> displayAllChosenInTheOrder(Integer[] ids, Integer cid) {
        List<CartVO> cartVOS = cartMapper.displayAllChosenInTheOrder(ids);
        for(CartVO c:cartVOS){
            if(c.getCid()!=cid){
                throw new ProductIsNullException("illegal product, please try again");
            }
        }
        return cartVOS;
    }
}

