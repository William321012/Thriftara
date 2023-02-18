package com.example.store.controller;

import com.example.store.service.exception.InsertException;
import com.example.store.service.exception.ServiceException;
import com.example.store.service.exception.UsernameDuplicatedException;
import com.example.store.util.JsonResult;
import org.springframework.web.bind.annotation.ExceptionHandler;

public class BaseController {

    @ExceptionHandler(ServiceException.class)
    public JsonResult<Void> handlerException(Exception e){
        JsonResult<Void> result = new JsonResult<>();
        if(e instanceof InsertException){
            result.setState(5000);
            result.setMessage("unknown error during insertion");
        }else if(e instanceof UsernameDuplicatedException){
            result.setState(4000);
            result.setMessage("username already exist");
        }

        return result;
    }

}
