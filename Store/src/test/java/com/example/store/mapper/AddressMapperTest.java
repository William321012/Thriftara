package com.example.store.mapper;

import com.example.store.pojo.Address;
import com.example.store.pojo.City;
import com.example.store.pojo.State;
import jakarta.annotation.Resource;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;
import java.util.List;

@SpringBootTest
public class AddressMapperTest {

    @Resource
    AddressMapper addressMapper;

    @Test
    public void countAll(){
        Integer integer = addressMapper.countAllAddress(4);
        System.out.println(integer);

    }

    @Test
    public void insertAddress(){
        Address address = new Address();
        address.setCid(4);
        Integer integer = addressMapper.insertAddress(address);
        System.out.println(integer);

    }

    @Test
    public void searchStataes(){
        List<State> states = addressMapper.selectAllState();
        System.out.println(states);

    }

    @Test
    public void searchCitiesBaseStates(){
        List<City> ny = addressMapper.selectCitiesBaseOnState("NC");
        System.out.println(ny);

    }

    @Test
    public void selectAllAddress(){
        List<Address> addresses = addressMapper.selectAllAddress(4);

    }

    @Test
    public void selectAddByAid(){
        Address address = addressMapper.selectAddressByAid(10);
    }
    
    
    @Test
    public void SetAddressZero(){
        Integer integer = addressMapper.setAllAddressDefaultZero(4);
    }

    @Test
    public void setAddressOne(){
        addressMapper.setAddressDefaultOne(10,"admin",new Date());
    }

    @Test
    public void deleteByAid(){
        addressMapper.deleteAddressByAid(6);
    }

    @Test
    public void selectAddressOrderByTime(){
        Address oneUserAddressOrderByModifiedTime = addressMapper.findLastModifiedAddress(1);
    }

    @Test
    public void selectAddressByAid(){
        addressMapper.selectAddressByAid(21);
    }
}
