package com.example.store.controller;

import com.example.store.service.ICartService;
import com.example.store.service.impl.CartServiceImpl;
import com.example.store.util.JsonResult;
import com.example.store.vo.CartVO;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/carts")
public class CartController extends BaseController {

    @Resource
    private ICartService cartService;

    @RequestMapping("/insertToCart")
    public JsonResult<Void> insertToCart(HttpServletRequest request, Integer pid, Integer amount) {
        JsonResult<Void> result = new JsonResult<>();
        Integer cid = (Integer) request.getSession().getAttribute("cid");
        String username = (String) request.getSession().getAttribute("username");
        cartService.insertProductToTheCart(cid, pid, username, amount);

        result.setState(200);
        result.setMessage("success");
        return result;
    }

    @RequestMapping("/display")
    public JsonResult<List<CartVO>> display(HttpServletRequest request) {
        JsonResult<List<CartVO>> result = new JsonResult<>();
        Integer cid = (Integer) request.getSession().getAttribute("cid");

        List<CartVO> cartVO = cartService.displayAllProductInTheCart(cid);

        result.setState(200);
        result.setMessage("success");
        result.setData(cartVO);

        return result;
    }

    @RequestMapping("/addNumFromTheCart")
    public JsonResult<Integer> addNumFromTheCart(HttpServletRequest request, Integer id) {
        JsonResult<Integer> result = new JsonResult<>();
        Integer cid = (Integer) request.getSession().getAttribute("cid");
        String username = (String) request.getSession().getAttribute("username");

        Integer data = cartService.addNumFromTheCart(id, cid, username);

        result.setState(200);
        result.setMessage("success");
        result.setData(data);

        return result;
    }

    @RequestMapping("/minusNumFromTheCart")
    public JsonResult<Integer> minNumFromTheCart(HttpServletRequest request, Integer id) {
        JsonResult<Integer> result = new JsonResult<>();
        Integer cid = (Integer) request.getSession().getAttribute("cid");
        String username = (String) request.getSession().getAttribute("username");

        Integer data = cartService.minusNumFromTheCart(id, cid, username);

        result.setState(200);
        result.setMessage("success");
        result.setData(data);

        return result;
    }

    @RequestMapping("/list")
    public JsonResult<List<CartVO>> list(HttpServletRequest request, Integer[] checkId) {
        JsonResult<List<CartVO>> result = new JsonResult<>();
        Integer cid = (Integer) request.getSession().getAttribute("cid");

        List<CartVO> cartVOS = cartService.displayAllChosenInTheOrder(checkId, cid);

        result.setState(200);
        result.setMessage("success");
        result.setData(cartVOS);

        return result;
    }

    @RequestMapping("/delete")
    public JsonResult<Void> delete(HttpServletRequest request, Integer id) {
        JsonResult<Void> result = new JsonResult<>();
        Integer cid = (Integer) request.getSession().getAttribute("cid");

        cartService.deleteProductFromTheCartById(id, cid);

        result.setState(200);
        result.setMessage("success");
        return result;
    }
}
