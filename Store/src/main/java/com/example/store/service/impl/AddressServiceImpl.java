package com.example.store.service.impl;

import com.example.store.mapper.AddressMapper;
import com.example.store.pojo.Address;
import com.example.store.pojo.City;
import com.example.store.pojo.Customer;
import com.example.store.pojo.State;
import com.example.store.service.IAddressService;
import com.example.store.service.exception.AddressCountLimitException;
import com.example.store.service.exception.UpdateInforException;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;


@Service
public class AddressServiceImpl implements IAddressService {
    @Resource
    private AddressMapper addressMapper;

    @Value("${customer.address.max_count}")
    private Integer max;

    @Override
    public void createNewAddress(Integer cid, String username, Address address) {
        Integer count = addressMapper.countAllAddress(cid);
        if(count>max){
            throw new AddressCountLimitException("your number of address exceeded 20");
        }

        address.setCid(cid);
        //to decide whether is default or not
        // if the user have 0 address then the next address the user created is the default address
        Integer isDefault = count == 0 ? 1 : 0;
        address.setIsDefault(isDefault);

        address.setModifiedUser(username);
        address.setModifiedTime(new Date());
        address.setCreatedUser(username);
        address.setCreateTime(new Date());

        Integer integer = addressMapper.insertAddress(address);
        if(integer!=1){
            throw new UpdateInforException("update error");
        }
    }

    @Override
    public List<State> selectAllStates() {
        List<State> states = addressMapper.selectAllState();
        return states;
    }

    @Override
    public List<City> selectCitiesBaseOnState(String state) {
        List<City> cities = addressMapper.selectCitiesBaseOnState(state);

        return cities;
    }


}
