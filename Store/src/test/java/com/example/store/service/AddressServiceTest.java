package com.example.store.service;

import com.example.store.pojo.Address;
import com.example.store.pojo.City;
import jakarta.annotation.Resource;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class AddressServiceTest {

    @Resource
    IAddressService addressService;

    @Test
    public void insertAddress(){
        Address address = new Address();
        address.setCid(4);
        addressService.createNewAddress(4,"sb2",address);
    }
    
    @Test
    public void selectCities(){
        List<City> ny = addressService.selectCitiesBaseOnState("NB");
    }
    
    @Test
    public void selectAllAddressByCid(){
        List<Address> addresses = addressService.selectAllAddressByCid(4);
    }

    @Test
    public void setDefault(){
        addressService.setAddressDefaultOne(10 ,"admin",4);

    }

    @Test
    public void deleteAndSetNewAddress(){
        addressService.deleteAddressByAid(1,4,"admin");
    }
}
