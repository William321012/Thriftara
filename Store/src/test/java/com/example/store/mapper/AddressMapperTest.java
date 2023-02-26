package com.example.store.mapper;

import com.example.store.pojo.Address;
import com.example.store.pojo.City;
import com.example.store.pojo.State;
import jakarta.annotation.Resource;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

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
}
