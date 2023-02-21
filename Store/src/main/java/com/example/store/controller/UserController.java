package com.example.store.controller;


import com.example.store.pojo.Customer;
import com.example.store.service.IUserService;
import com.example.store.service.exception.InsertException;
import com.example.store.service.exception.UsernameDuplicatedException;
import com.example.store.util.JsonResult;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
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
    public JsonResult<Customer> log(Customer customer, HttpSession httpSession){
        JsonResult<Customer> result = new JsonResult<>();
        Customer customer1 = userService.login(customer);

        httpSession.setAttribute("customer",customer1);
        httpSession.setAttribute("cid",customer1.getCid());
        httpSession.setAttribute("username",customer1.getUsername());

        result.setState(200);
        result.setMessage("success");
        result.setData(customer1);
        return result;
    }

    @RequestMapping("/password")
    public JsonResult<Void> password(String oldPassword, String newPassword, String confirm, HttpSession httpSession){
        System.out.println(oldPassword);
        System.out.println(newPassword);
        System.out.println(confirm);

        JsonResult<Void> result = new JsonResult<>();
        String username =(String)httpSession.getAttribute("username");

        userService.changePassword(oldPassword, newPassword, confirm, username);

        result.setState(200);
        result.setMessage("success");

        return result;
    }

    @RequestMapping("/getPersonalInfo")
    public JsonResult<Customer> getPersonalInfo(HttpServletRequest request){
        JsonResult<Customer> result = new JsonResult<>();

        Integer cid = (Integer)request.getSession().getAttribute("cid");

        Customer customerInfoById = userService.getCustomerInfoById(cid);

        result.setState(200);
        result.setMessage("success");
        result.setData(customerInfoById);

        System.out.println(result);

        return result;

    }

    @RequestMapping("/updateInfo")
    public JsonResult<Void> updateInfo(Customer customer,HttpServletRequest request){
        JsonResult<Void> result = new JsonResult<>();

        Integer cid= (Integer) request.getSession().getAttribute("cid");
        customer.setCid(cid);
        System.out.println(customer);

        String username = (String)request.getSession().getAttribute("username");

        userService.updateCustomerInformation(cid,username,customer);

        result.setState(200);
        result.setMessage("success");

        return result;

    }
}
