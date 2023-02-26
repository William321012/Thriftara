package com.example.store.pojo;

import java.io.Serializable;
import java.util.Objects;


public class Address extends BaseEntity implements Serializable {
    Integer aid;
    Integer cid;
    String name;
    String city;
    String state;
    Integer zip;
    String address;
    String phone;
    String apartment;
    Integer isDefault;

    public Integer getAid() {
        return aid;
    }

    public void setAid(Integer aid) {
        this.aid = aid;
    }

    public Integer getCid() {
        return cid;
    }

    public void setCid(Integer cid) {
        this.cid = cid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public Integer getZip() {
        return zip;
    }

    public void setZip(Integer zip) {
        this.zip = zip;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getApartment() {
        return apartment;
    }

    public void setApartment(String apartment) {
        this.apartment = apartment;
    }

    public Integer getIsDefault() {
        return isDefault;
    }

    public void setIsDefault(Integer isDefault) {
        this.isDefault = isDefault;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;

        Address address1 = (Address) o;

        if (!Objects.equals(aid, address1.aid)) return false;
        if (!Objects.equals(cid, address1.cid)) return false;
        if (!Objects.equals(name, address1.name)) return false;
        if (!Objects.equals(city, address1.city)) return false;
        if (!Objects.equals(state, address1.state)) return false;
        if (!Objects.equals(zip, address1.zip)) return false;
        if (!Objects.equals(address, address1.address)) return false;
        if (!Objects.equals(phone, address1.phone)) return false;
        if (!Objects.equals(apartment, address1.apartment)) return false;
        return Objects.equals(isDefault, address1.isDefault);
    }

    @Override
    public int hashCode() {
        int result = super.hashCode();
        result = 31 * result + (aid != null ? aid.hashCode() : 0);
        result = 31 * result + (cid != null ? cid.hashCode() : 0);
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (city != null ? city.hashCode() : 0);
        result = 31 * result + (state != null ? state.hashCode() : 0);
        result = 31 * result + (zip != null ? zip.hashCode() : 0);
        result = 31 * result + (address != null ? address.hashCode() : 0);
        result = 31 * result + (phone != null ? phone.hashCode() : 0);
        result = 31 * result + (apartment != null ? apartment.hashCode() : 0);
        result = 31 * result + (isDefault != null ? isDefault.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Address{" +
                "aid=" + aid +
                ", cid=" + cid +
                ", name='" + name + '\'' +
                ", city='" + city + '\'' +
                ", state='" + state + '\'' +
                ", zip=" + zip +
                ", address='" + address + '\'' +
                ", phone=" + phone +
                ", apartment='" + apartment + '\'' +
                ", isDefault=" + isDefault +
                '}';
    }
}
