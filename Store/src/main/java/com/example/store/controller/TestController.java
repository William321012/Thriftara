package com.example.store.controller;

import com.example.store.util.JsonResult;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/test")
public class TestController {

    @RequestMapping("/test")
    public JsonResult<String> TestController(){
        JsonResult<String> result = new JsonResult<>();

        result.setState(200);
        result.setMessage("success");
        result.setData("test");
        return result;
    }
}
