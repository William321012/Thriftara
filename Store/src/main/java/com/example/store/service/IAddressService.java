package com.example.store.service;

import com.example.store.pojo.Address;
import com.example.store.pojo.City;
import com.example.store.pojo.Customer;
import com.example.store.pojo.State;

import java.util.List;

public interface IAddressService {

    void createNewAddress(Integer cid, String username, Address address);

    List<State> selectAllStates();

    List<City> selectCitiesBaseOnState(String state);


}
