package com.example.store.controller;

import com.example.store.controller.exception.*;
import com.example.store.mapper.CustomerMapper;
import com.example.store.pojo.Customer;
import com.example.store.pojo.Product;
import com.example.store.service.IUserService;
import com.example.store.service.exception.InsertException;
import com.example.store.service.exception.UsernameDuplicatedException;
import com.example.store.util.JsonResult;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/customers")
public class UserController extends BaseController {

    @Autowired
    private IUserService userService;

    @RequestMapping("/reg")

    public JsonResult<Void> reg(Customer customer) {
        JsonResult<Void> result = new JsonResult<>();

        userService.registration(customer);
        result.setState(200);
        result.setMessage("success");

        return result;
    }

    @RequestMapping("/log")
    public JsonResult<Customer> login(Customer customer, HttpSession httpSession) {
        JsonResult<Customer> result = new JsonResult<>();
        Customer customer1 = userService.login(customer);

        System.out.println(httpSession);
        httpSession.setAttribute("customer", customer1);
        httpSession.setAttribute("cid", customer1.getCid());
        httpSession.setAttribute("username", customer1.getUsername());

        result.setState(200);
        result.setMessage("success");
        result.setData(customer1);
        return result;
    }

    @RequestMapping("/password")
    public JsonResult<Void> password(String oldPassword, String newPassword, String confirm, HttpSession httpSession) {
        System.out.println(oldPassword);
        System.out.println(newPassword);
        System.out.println(confirm);

        JsonResult<Void> result = new JsonResult<>();
        String username = (String) httpSession.getAttribute("username");

        userService.changePassword(oldPassword, newPassword, confirm, username);

        result.setState(200);
        result.setMessage("success");

        return result;
    }

    @RequestMapping("/getPersonalInfo")
    public JsonResult<Customer> getPersonalInfo(HttpServletRequest request) {
        JsonResult<Customer> result = new JsonResult<>();

        Integer cid = (Integer) request.getSession().getAttribute("cid");

        Customer customerInfoById = userService.getCustomerInfoById(cid);

        result.setState(200);
        result.setMessage("success");
        result.setData(customerInfoById);

        System.out.println(result);

        return result;

    }

    @RequestMapping("/updateInfo")
    public JsonResult<Void> updateInfo(Customer customer, HttpServletRequest request) {
        JsonResult<Void> result = new JsonResult<>();

        // Integer cid = getIdFromSession(request.getSession());
        Integer cid = (Integer) request.getSession().getAttribute("cid");
        customer.setCid(cid);
        System.out.println(customer);

        String username = (String) request.getSession().getAttribute("username");

        userService.updateCustomerInformation(cid, username, customer);

        result.setState(200);
        result.setMessage("success");
        return result;
    }

    public static final int AVATAR_MAX_SIZE = 10 * 1024 * 1024;

    public static final List<String> AVATAR_TYPE = new ArrayList<>();

    static {
        AVATAR_TYPE.add("image/png");
        AVATAR_TYPE.add("image/jpeg");
        AVATAR_TYPE.add("image/gif");
    }

    @RequestMapping("/updateAvatar")
    public JsonResult<String> updateAvatar(HttpServletRequest request, MultipartFile file) {
        JsonResult<String> result = new JsonResult<>();

        if (file.isEmpty()) {
            throw new FileEmptyException("file is empty");
        }

        if (file.getSize() > AVATAR_MAX_SIZE) {
            throw new FileSizeException("the size of file does not meet the requirement");
        }

        String contentType = file.getContentType();

        if (!AVATAR_TYPE.contains(contentType)) {
            throw new FileTypeException("the type of file does not meet the requirement");
        }

        // Specifies that uploaded files must be under this directory ../upload/xxx.jpg
        // create the directory for storing the avatar first ../upload
        // String upload =
        // request.getSession().getServletContext().getRealPath("/upload");
        // System.out.println(upload);
        String upload = System.getProperty("user.dir") + "\\src\\main\\resources\\static\\images";

        System.out.println(upload);

        File dir = new File(upload);

        // create this directory if it does not exist
        if (!dir.exists()) {
            dir.mkdirs();
        }

        // get the name of the file first, then using UUID to create a new name for this
        // file
        // xxx.jpg
        String originalFilename = file.getOriginalFilename();
        System.out.println(originalFilename);

        // storing the suffix of the file
        int index = originalFilename.lastIndexOf(".");
        String suffix = originalFilename.substring(index);
        System.out.println(suffix);

        // encrypt this filename
        String newFileName = UUID.randomUUID().toString().toUpperCase();

        // complete whole file name with encryption filename + suffix ex: xxx +.jpg
        String newFile = newFileName + suffix;

        // create a empty file that is under the "dir" directory(/upload) with the file
        // name "newFile"
        File dest = new File(dir, newFile);

        // transfer the data from the input file to that empty file "dest"
        try {
            file.transferTo(dest);
        } catch (FileStateException e) {
            throw new FileStateException("the state of file is abnormal");
        } catch (IOException e) {
            throw new FileIOException("IO Exception");
        }

        Integer cid = (Integer) request.getSession().getAttribute("cid");
        String username = (String) request.getSession().getAttribute("username");

        // return the path of the file for displaying
        // storing the path of the avatar to the db

        // String avatar="/upload/"+newFile;
        String avatar = "/images/" + newFile;
        userService.updateAvatar(cid, avatar, username);

        result.setState(200);
        result.setMessage("success");
        result.setData(avatar);

        // return the path of avatar to front end
        return result;
    }

    // @Resource
    // private CustomerMapper customerMapper;

    @RequestMapping("/getAvatarInfo")
    public JsonResult<String> getAvatar(HttpServletRequest request) {
        JsonResult<String> result = new JsonResult<>();

        Customer customer = (Customer) request.getSession().getAttribute("customer");
        Integer cid = customer.getCid();

        String avatar = userService.getAvatar(cid);

        result.setState(200);
        result.setMessage("success");
        result.setData(avatar);
        return result;
    }

    @RequestMapping("/displayUserProduct")
    public JsonResult<List<Product>> displayUserProduct(HttpServletRequest request) {
        JsonResult<List<Product>> result = new JsonResult<>();

        Customer customer = (Customer) request.getSession().getAttribute("customer");
        Integer cid = customer.getCid();

        List<Product> products = userService.displayAllUserProduct(cid);

        result.setState(200);
        result.setMessage("success");
        result.setData(products);
        return result;
    }

    @RequestMapping("/logout")
    //httpSession.setAttribute("customer", customer1);
    //        httpSession.setAttribute("cid", customer1.getCid());
    //        httpSession.setAttribute("username", customer1.getUsername());
    public String logout (HttpSession session){
        JsonResult<String> result = new JsonResult<>();
        session.removeAttribute("customer");
        session.removeAttribute("cid");
        session.removeAttribute("username");
        result.setState(200);
        result.setMessage("success");
        result.setData("logout successfully");

        return"redirect:http://localhost:8080/login.html";

    }

}
