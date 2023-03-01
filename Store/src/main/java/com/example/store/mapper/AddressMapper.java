package com.example.store.mapper;

import com.example.store.pojo.Address;
import com.example.store.pojo.City;
import com.example.store.pojo.State;
import org.apache.ibatis.annotations.Mapper;

import java.util.Date;
import java.util.List;

@Mapper
public interface AddressMapper {

    Integer countAllAddress(Integer uid);

    Integer insertAddress(Address address);

    List<State> selectAllState();

    List<City> selectCitiesBaseOnState(String stateCode);

    List<Address> selectAllAddress(Integer cid);

    Address selectAddressByAid(Integer aid);

    Integer setAllAddressDefaultZero(Integer cid);

    Integer setAddressDefaultOne(Integer aid, String modifiedUser, Date modifiedTime);

    Integer deleteAddressByAid(Integer aid);

    Address findLastModifiedAddress(Integer cid);
}
