package com.example.store.controller;

import com.example.store.controller.exception.*;
import com.example.store.service.exception.*;
import com.example.store.util.JsonResult;
import jakarta.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.ExceptionHandler;

public class BaseController {

    @ExceptionHandler({ServiceException.class, FileUploadException.class})
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
        }else if(e instanceof UpdateInforException) {
            result.setState(5004);
            result.setMessage("personal information update failed");
        }else if(e instanceof FileEmptyException) {
            result.setState(6000);
            result.setMessage("can not upload empty");
        }else if(e instanceof FileIOException) {
            result.setState(6001);
            result.setMessage("unknown error during read or write");
        }else if(e instanceof FileSizeException) {
            result.setState(6002);
            result.setMessage("File size does not meet the requirement");
        }else if(e instanceof FileStateException) {
            result.setState(6003);
            result.setMessage("File is not in the normal state");
        }else if(e instanceof FileTypeException) {
            result.setState(6004);
            result.setMessage("File type does not meet the requirement");
        }else if(e instanceof AddressCountLimitException) {
            result.setState(7001);
            result.setMessage("the number of address exceed the requirement ");
        }else if(e instanceof AddressNotFoundException) {
            result.setState(7002);
            result.setMessage("address can not be found");
        }else if(e instanceof AddressSetDefaultFailedException) {
            result.setState(7003);
            result.setMessage("Default setting failure");
        }else if(e instanceof AddressDeleteException) {
            result.setState(7004);
            result.setMessage("Default deleting failure");
        }else if(e instanceof ProductIsNullException) {
            result.setState(8001);
            result.setMessage("illegal product");
        }else if(e instanceof CartNotFoundException){
            result.setState(8002);
            result.setMessage("illegal cart");
        }else if(e instanceof ProductInsufficientException) {
            result.setState(9001);
            result.setMessage("insufficient num of product");
        }else if(e instanceof DeleteException) {
            result.setState(9002);
            result.setMessage("delete failed");
        }else if(e instanceof PhoneIsNullException) {
            result.setState(9003);
            result.setMessage("you must finish your phone information before ordering");
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
