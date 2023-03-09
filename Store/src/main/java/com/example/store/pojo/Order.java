package com.example.store.pojo;

import java.util.Date;
import java.util.Objects;

public class Order extends BaseEntity{
    private Integer oid;
    private Integer cid;
    private String receiverName;
    private String receiverPhone;
    private String receiverAddress;
    private String receiverCity;
    private String receiverState;
    private Integer receiverZip;
    private Double totalPrice;
    //0 unpaid, 1 paid, 2 cancel, 3 close, 4 finished
    private Integer status;
    private Date orderTime;
    private Date payTime;

    public Integer getOid() {
        return oid;
    }

    public void setOid(Integer oid) {
        this.oid = oid;
    }

    public Integer getCid() {
        return cid;
    }

    public void setCid(Integer cid) {
        this.cid = cid;
    }

    public String getReceiverName() {
        return receiverName;
    }

    public void setReceiverName(String receiverName) {
        this.receiverName = receiverName;
    }

    public String getReceiverPhone() {
        return receiverPhone;
    }

    public void setReceiverPhone(String receiverPhone) {
        this.receiverPhone = receiverPhone;
    }

    public String getReceiverAddress() {
        return receiverAddress;
    }

    public void setReceiverAddress(String receiverAddress) {
        this.receiverAddress = receiverAddress;
    }

    public String getReceiverCity() {
        return receiverCity;
    }

    public void setReceiverCity(String receiverCity) {
        this.receiverCity = receiverCity;
    }

    public String getReceiverState() {
        return receiverState;
    }

    public void setReceiverState(String receiverState) {
        this.receiverState = receiverState;
    }

    public Integer getReceiverZip() {
        return receiverZip;
    }

    public void setReceiverZip(Integer receiverZip) {
        this.receiverZip = receiverZip;
    }

    public Double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Date getOrderTime() {
        return orderTime;
    }

    public void setOrderTime(Date orderTime) {
        this.orderTime = orderTime;
    }

    public Date getPayTime() {
        return payTime;
    }

    public void setPayTime(Date payTime) {
        this.payTime = payTime;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;

        Order order = (Order) o;

        if (!Objects.equals(oid, order.oid)) return false;
        if (!Objects.equals(cid, order.cid)) return false;
        if (!Objects.equals(receiverName, order.receiverName)) return false;
        if (!Objects.equals(receiverPhone, order.receiverPhone))
            return false;
        if (!Objects.equals(receiverAddress, order.receiverAddress))
            return false;
        if (!Objects.equals(receiverCity, order.receiverCity)) return false;
        if (!Objects.equals(receiverState, order.receiverState))
            return false;
        if (!Objects.equals(receiverZip, order.receiverZip)) return false;
        if (!Objects.equals(totalPrice, order.totalPrice)) return false;
        if (!Objects.equals(status, order.status)) return false;
        if (!Objects.equals(orderTime, order.orderTime)) return false;
        return Objects.equals(payTime, order.payTime);
    }

    @Override
    public int hashCode() {
        int result = super.hashCode();
        result = 31 * result + (oid != null ? oid.hashCode() : 0);
        result = 31 * result + (cid != null ? cid.hashCode() : 0);
        result = 31 * result + (receiverName != null ? receiverName.hashCode() : 0);
        result = 31 * result + (receiverPhone != null ? receiverPhone.hashCode() : 0);
        result = 31 * result + (receiverAddress != null ? receiverAddress.hashCode() : 0);
        result = 31 * result + (receiverCity != null ? receiverCity.hashCode() : 0);
        result = 31 * result + (receiverState != null ? receiverState.hashCode() : 0);
        result = 31 * result + (receiverZip != null ? receiverZip.hashCode() : 0);
        result = 31 * result + (totalPrice != null ? totalPrice.hashCode() : 0);
        result = 31 * result + (status != null ? status.hashCode() : 0);
        result = 31 * result + (orderTime != null ? orderTime.hashCode() : 0);
        result = 31 * result + (payTime != null ? payTime.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Order{" +
                "oid=" + oid +
                ", cid=" + cid +
                ", receiverName='" + receiverName + '\'' +
                ", receiverPhone='" + receiverPhone + '\'' +
                ", receiverAddress='" + receiverAddress + '\'' +
                ", receiverCity='" + receiverCity + '\'' +
                ", receiverState='" + receiverState + '\'' +
                ", receiverZip=" + receiverZip +
                ", totalPrice=" + totalPrice +
                ", status=" + status +
                ", orderTime=" + orderTime +
                ", payTime=" + payTime +
                '}';
    }
}
