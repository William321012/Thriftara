package com.example.store.controller;

import com.example.store.service.exception.*;
import com.example.store.util.JsonResult;
import jakarta.servlet.http.HttpSession;
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
        }else if(e instanceof UserNotExistException){
            result.setState(5001);
            result.setMessage("username does not exist");
        }else if(e instanceof PasswordNotMatchException){
            result.setState(5002);
            result.setMessage("password does not match");
        }else if(e instanceof PasswordUpdateFailedException) {
            result.setState(5003);
            result.setMessage("password update failed");
        }
        return result;
    }

    protected final Integer getIdFromSession(HttpSession httpSession){
        Integer cid = (Integer)httpSession.getAttribute("cid");
        return cid;
    }

    protected final String getUsernameFromSession(HttpSession httpSession){
        String username = (String)httpSession.getAttribute("username");
        return username;
    }


}
