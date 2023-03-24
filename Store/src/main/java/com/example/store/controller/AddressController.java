package com.example.store.controller;

import com.example.store.pojo.Address;
import com.example.store.pojo.AddressState;
import com.example.store.pojo.City;
import com.example.store.pojo.State;
import com.example.store.service.IAddressService;
import com.example.store.util.JsonResult;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/address")
public class AddressController extends BaseController{
    @Resource
    private IAddressService addressService;

    @RequestMapping("/addNewAddress")
    public JsonResult<Void> insert(HttpServletRequest request,Address address){
        System.out.println(address);
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

        return result;
    }

    @RequestMapping("/selectCitiesBaseOnState")
    public JsonResult<List<City>> selectCitiesBaseOnState(HttpServletRequest request, String code){
        JsonResult<List<City>> result = new JsonResult<>();
        List<City> cities = addressService.selectCitiesBaseOnState(code);
        result.setState(200);
        result.setMessage("success");
        result.setData(cities);

        return result;
    }

    @RequestMapping("/getAllAddressByCid")
    public JsonResult<List<Address>> getAllAddressByCid (HttpServletRequest request){
        JsonResult<List<Address>> result = new JsonResult<>();
        Integer cid =(Integer)request.getSession().getAttribute("cid");
        List<Address> addresses = addressService.selectAllAddressByCid(cid);
        result.setState(200);
        result.setMessage("success");
        result.setData(addresses);

        return result;
    }

    @RequestMapping("/setDefault")
    public JsonResult<Void> setDefault (HttpServletRequest request, Integer aid){
        JsonResult<Void> result = new JsonResult<>();
        Integer cid =(Integer)request.getSession().getAttribute("cid");
        String username =(String)request.getSession().getAttribute("username");
        addressService.setAddressDefaultOne(aid, username, cid);
        result.setState(200);
        result.setMessage("success");

        return result;
    }

    @RequestMapping("/delete")
    public JsonResult<Void> delete (HttpServletRequest request, Integer aid){
        JsonResult<Void> result = new JsonResult<>();
        Integer cid =(Integer)request.getSession().getAttribute("cid");
        String username =(String)request.getSession().getAttribute("username");
        addressService.deleteAddressByAid(aid,cid,username);
        result.setState(200);
        result.setMessage("success");

        return result;
    }

    @RequestMapping("/getAddressByAid")
    public JsonResult<AddressState> getAllAddressByAid (HttpServletRequest request, Integer aid){
        JsonResult<AddressState> result = new JsonResult<>();
        Integer cid =(Integer)request.getSession().getAttribute("cid");
        Address address = addressService.selectAddressByAid(aid,cid);
        List<State> states = addressService.selectAllStates();

        AddressState addressState = new AddressState();
        addressState.setAddress(address);
        addressState.setStates(states);
        String stateCode = address.getState();

        List<City> cities = addressService.selectCitiesBaseOnState(stateCode);
        addressState.setCities(cities);


        result.setState(200);
        result.setMessage("success");
        result.setData(addressState);

        return result;
    }

    @RequestMapping("/updateNewAddress")
//    aid="+aid+"&name="+name+"&address="+address+"&apartment="+apartment+"&zip="+zip+"&phone="+phone+"&state="+state+"&city="+city
    public JsonResult<Void> update(HttpServletRequest request,Address address){
        System.out.println(address);
        JsonResult<Void> result = new JsonResult<>();
        Integer cid =(Integer) request.getSession().getAttribute("cid");
        String username =(String) request.getSession().getAttribute("username");
        addressService.updateAddress(cid,username,address);

        result.setState(200);
        result.setMessage("success");
        return result;
    }
}
