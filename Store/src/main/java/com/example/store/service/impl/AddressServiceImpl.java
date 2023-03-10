package com.example.store.service.impl;

import com.example.store.mapper.AddressMapper;
import com.example.store.pojo.Address;
import com.example.store.pojo.City;
import com.example.store.pojo.State;
import com.example.store.service.IAddressService;
import com.example.store.service.exception.*;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

//        address.setState(address.state);


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

    @Override
    public List<Address> selectAllAddressByCid(Integer cid) {
        List<Address> addresses = addressMapper.selectAllAddress(cid);
        return addresses;
    }

    /**
     *
     * @param aid address id
     * @param username
     * @param cid customer id
     */
    @Transactional
    @Override
    public void setAddressDefaultOne(Integer aid, String username, Integer cid) {
        Address address = addressMapper.selectAddressByAid(aid);
        if(address==null){
            throw new AddressNotFoundException("address can not be found");
        }

        Integer integer = addressMapper.setAllAddressDefaultZero(cid);
        if(integer == 0){
            throw new UpdateInforException("update 0 failed");
        }

        Integer integer1 = addressMapper.setAddressDefaultOne(aid, username, new Date());
        if(integer1 != 1){
            throw new AddressSetDefaultFailedException("Default setting failure");
        }
    }

    @Override
    @Transactional
    public void deleteAddressByAid(Integer aid, Integer cid,String username) {
        Address address = addressMapper.selectAddressByAid(aid);
        if(address==null){
            throw new AddressNotFoundException("address can not be found");
        }

        Integer integer = addressMapper.deleteAddressByAid(aid);
        if(integer!=1){
            throw new AddressDeleteException("address deleting failed");
        }

        List<Address> addresses = addressMapper.selectAllAddress(cid);
        if(addresses==null){
            return;
        }
        if(address.getIsDefault()==1){
            Address a = addressMapper.findLastModifiedAddress(cid);
            Integer aid1 = a.getAid();
            addressMapper.setAddressDefaultOne(aid1,username,new Date());
        }

    }

    @Override
    public Address selectAddressByAid(Integer aid, Integer cid) {
        Address address = addressMapper.selectAddressByAid(aid);
        if(address==null){
            throw new AddressNotFoundException("this address is illegal");
        }

        if(address.getCid()!=cid){
            throw new AddressNotFoundException("this address is illegal");
        }
        return address;
    }


}
