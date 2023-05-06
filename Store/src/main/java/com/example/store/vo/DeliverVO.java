package com.example.store.vo;

import java.io.Serializable;
import java.util.Date;

public class DeliverVO implements Serializable {
    private int id;
    private int pid;
    private int cid;
    private int oid;
    private String address;

    private String city;
    private String state;
    private int zip;
    private String name;
    private double total;
    private String image;
    private int num;
    private double unit;
    private int statue;
    private Date OrderTime;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPid() {
        return pid;
    }

    public void setPid(int pid) {
        this.pid = pid;
    }

    public int getCid() {
        return cid;
    }

    public void setCid(int cid) {
        this.cid = cid;
    }

    public int getOid() {
        return oid;
    }

    public void setOid(int oid) {
        this.oid = oid;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public int getZip() {
        return zip;
    }

    public void setZip(int zip) {
        this.zip = zip;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public double getUnit() {
        return unit;
    }

    public void setUnit(double unit) {
        this.unit = unit;
    }

    public int getStatue() {
        return statue;
    }

    public void setStatue(int statue) {
        this.statue = statue;
    }

    public Date getOrderTime() {
        return OrderTime;
    }

    public void setOrderTime(Date orderTime) {
        OrderTime = orderTime;
    }

    @Override
    public String toString() {
        return "DeliverVO{" +
                "id=" + id +
                ", pid=" + pid +
                ", cid=" + cid +
                ", oid=" + oid +
                ", address='" + address + '\'' +
                ", city='" + city + '\'' +
                ", state='" + state + '\'' +
                ", zip=" + zip +
                ", name='" + name + '\'' +
                ", total=" + total +
                ", image='" + image + '\'' +
                ", num=" + num +
                ", unit=" + unit +
                ", statue=" + statue +
                ", OrderTime=" + OrderTime +
                '}';
    }
}
