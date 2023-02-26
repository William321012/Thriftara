package com.example.store.controller;

import com.example.store.pojo.Address;
import com.example.store.pojo.City;
import com.example.store.pojo.State;
import com.example.store.service.IAddressService;
import com.example.store.util.JsonResult;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/address")
public class AddressController extends BaseController{

    @Resource
    private IAddressService addressService;

    @RequestMapping("/addNewAddress")
    public JsonResult<Void> insert(HttpServletRequest request,Address address){
        JsonResult<Void> result = new JsonResult<>();
        Integer cid =(Integer) request.getSession().getAttribute("cid");
        String username =(String) request.getSession().getAttribute("username");
        addressService.createNewAddress(cid,username,address);

        result.setState(200);
        result.setMessage("success");
        return result;
    }

    @RequestMapping("/selectAllStates")
    public JsonResult<List<State>> selectAllStates(HttpServletRequest request){
        JsonResult<List<State>> result = new JsonResult<>();
        List<State> states = addressService.selectAllStates();
        result.setState(200);
        result.setMessage("success");
        result.setData(states);

        return  result;
    }

    @RequestMapping("/selectCitiesBaseOnState")
    public JsonResult<List<City>> selectCitiesBaseOnState(HttpServletRequest request,String state){
        JsonResult<List<City>> result = new JsonResult<>();
        List<City> cities = addressService.selectCitiesBaseOnState(state);
        result.setState(200);
        result.setMessage("success");
        result.setData(cities);

        return result;
    }
}
