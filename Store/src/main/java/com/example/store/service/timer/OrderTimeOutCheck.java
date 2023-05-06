package com.example.store.service.timer;

import com.example.store.mapper.OrderMapper;
import com.example.store.pojo.Order;
import com.example.store.service.exception.DeleteException;
import jakarta.annotation.Resource;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Service
public class OrderTimeOutCheck {
    @Resource
    private OrderMapper orderMapper;

    @Scheduled(cron = "*/5 * * * * ?")
    @Transactional
    public void checkOrder(){
        //search unpaid order that wait for more than 30 mins
        Long time=System.currentTimeMillis()-30*60*1500;
        System.out.println(time);

        List<Order> allOrders = orderMapper.getAllOrders();
        for(Order o:allOrders){
            Date orderTime = o.getOrderTime();
            Long time2=orderTime.getTime();
            if(time>time2 && o.getStatus()==0){
                Integer integer = orderMapper.deleteOrderItem(o.getOid());
                if(integer<0){
                    throw new DeleteException("delete order failed");
                }
                Integer integer1 = orderMapper.deleteOrder(o.getOid());
                if(integer1!=1){
                    throw new DeleteException("delete order item failed");
                }
            }

        }
    }
}
