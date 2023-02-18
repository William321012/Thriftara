package com.example.store.controller;


import com.example.store.pojo.Customer;
import com.example.store.service.IUserService;
import com.example.store.service.exception.InsertException;
import com.example.store.service.exception.UsernameDuplicatedException;
import com.example.store.util.JsonResult;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/customers")
public class UserController extends BaseController {

    @Autowired
    private IUserService userService;

    @RequestMapping("/reg")

    public JsonResult<Void> reg(Customer customer){
        JsonResult<Void> result = new JsonResult<>();

            userService.registration(customer);
            result.setState(200);
            result.setMessage("success");

        return result;
    }

    @RequestMapping("/log")
    public JsonResult<Customer> login(Customer customer){
        JsonResult<Customer> result = new JsonResult<>();
        Customer customer1 = userService.login(customer);
        result.setState(200);
        result.setMessage("success");
        result.setDate(customer1);
        return result;
    }


}
