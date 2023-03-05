package com.example.store.pojo;

import java.util.Objects;

public class Cart extends BaseEntity{
    //cart id
    private Integer id;
    //customer id
    private Integer cid;
    //product id
    private Integer pid;
    private Long price;
    private Integer num;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getCid() {
        return cid;
    }

    public void setCid(Integer cid) {
        this.cid = cid;
    }

    public Integer getPid() {
        return pid;
    }

    public void setPid(Integer pid) {
        this.pid = pid;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public Integer getNum() {
        return num;
    }

    public void setNum(Integer num) {
        this.num = num;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;

        Cart cart = (Cart) o;

        if (!Objects.equals(id, cart.id)) return false;
        if (!Objects.equals(cid, cart.cid)) return false;
        if (!Objects.equals(pid, cart.pid)) return false;
        if (!Objects.equals(price, cart.price)) return false;
        return Objects.equals(num, cart.num);
    }

    @Override
    public int hashCode() {
        int result = super.hashCode();
        result = 31 * result + (id != null ? id.hashCode() : 0);
        result = 31 * result + (cid != null ? cid.hashCode() : 0);
        result = 31 * result + (pid != null ? pid.hashCode() : 0);
        result = 31 * result + (price != null ? price.hashCode() : 0);
        result = 31 * result + (num != null ? num.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Cart{" +
                "id=" + id +
                ", cid=" + cid +
                ", pid=" + pid +
                ", price=" + price +
                ", num=" + num +
                '}';
    }
}
