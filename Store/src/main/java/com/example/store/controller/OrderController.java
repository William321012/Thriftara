package com.example.store.controller;

import com.example.store.pojo.Order;
import com.example.store.pojo.OrderItem;
import com.example.store.service.IOrderService;
import com.example.store.util.JsonResult;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController extends BaseController{

    @Resource
    private IOrderService orderService;

    @RequestMapping("/createOrder")
    public JsonResult<Order> createOrder(Integer aid, HttpServletRequest request, Integer[] checkId){
        JsonResult<Order> jsonResult = new JsonResult<>();
        Integer cid = (Integer)request.getSession().getAttribute("cid");
        String username = (String)request.getSession().getAttribute("username");

        Order order = orderService.createOrder(aid, username, cid, checkId);

        jsonResult.setState(200);
        jsonResult.setMessage("success");
        jsonResult.setData(order);

        return jsonResult;

    }

    @RequestMapping("/getOrderByOid")
    public JsonResult<Order> getOrderByOid(HttpServletRequest request, Integer oid){
        JsonResult<Order> jsonResult = new JsonResult<>();
        Integer cid = (Integer)request.getSession().getAttribute("cid");
        Order order = orderService.getOrder(oid, cid);
        jsonResult.setState(200);
        jsonResult.setMessage("success");
        jsonResult.setData(order);

        return jsonResult;

    }

    @RequestMapping("/updateOrderStatus")
    public JsonResult<Void> updateOrderStatus(HttpServletRequest request, Integer oid){
        JsonResult<Void> jsonResult = new JsonResult<>();
        Integer cid = (Integer)request.getSession().getAttribute("cid");
        String username = (String)request.getSession().getAttribute("username");

        orderService.updateOrder(cid,oid,username);
        jsonResult.setState(200);
        jsonResult.setMessage("success");

        return jsonResult;
    }

    @RequestMapping("/getOrderItemByOid")
    public JsonResult<List<OrderItem>> getOrderItemByOid(HttpServletRequest request, Integer oid){
        JsonResult<List<OrderItem>> jsonResult = new JsonResult<>();
        Integer cid = (Integer)request.getSession().getAttribute("cid");
        String username = (String)request.getSession().getAttribute("username");
        List<OrderItem> orderItemByOid1 = orderService.getOrderItemByOid(oid, cid, username);
        for(OrderItem o:orderItemByOid1){
            System.out.println(o);
        }
        jsonResult.setState(200);
        jsonResult.setMessage("success");
        jsonResult.setData(orderItemByOid1);

        return jsonResult;

    }


    @RequestMapping("/displayAllOrder")
    public JsonResult<List<Order>> displayAllOrder(HttpServletRequest request){
        JsonResult<List<Order>> jsonResult = new JsonResult<>();
        Integer cid = (Integer)request.getSession().getAttribute("cid");
        List<Order> orders = orderService.displayAllOrdersByCid(cid);


        jsonResult.setState(200);
        jsonResult.setMessage("success");
        jsonResult.setData(orders);

        return jsonResult;

    }
}
