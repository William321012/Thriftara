package com.example.store.mapper;

import com.example.store.pojo.Order;
import com.example.store.vo.DeliverVO;

import java.util.Date;
import java.util.List;

public interface DeliveryMapper {


//    pid,cid,orderByOid.getReceiverAddress(),orderByOid.getReceiverCity(),orderByOid.getReceiverState(),
//            orderByOid.getReceiverZip(),orderByOid.getReceiverName(),orderByOid.getTotalPrice(),o.getImage(),o.getNum(),o.getUnitPrice()
    List<DeliverVO> selectAllDeliverOfOneUser(int cid);
    Integer createDeliver(int pid, int cid, int oid, String address, String city, String state, int zip, String name, double total, String image, int num, double unit, int statue, Date OrderTime);
}
