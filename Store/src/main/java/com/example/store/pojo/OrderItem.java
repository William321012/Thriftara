package com.example.store.pojo;

import java.util.Objects;

public class OrderItem extends BaseEntity{
    private Integer id;
    private Integer oid;
    private Integer pid;
    private String title;
    private String image;
    private Long unitPrice;
    private Integer num;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getOid() {
        return oid;
    }

    public void setOid(Integer oid) {
        this.oid = oid;
    }

    public Integer getPid() {
        return pid;
    }

    public void setPid(Integer pid) {
        this.pid = pid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Long getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(Long unitPrice) {
        this.unitPrice = unitPrice;
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

        OrderItem orderItem = (OrderItem) o;

        if (!Objects.equals(id, orderItem.id)) return false;
        if (!Objects.equals(oid, orderItem.oid)) return false;
        if (!Objects.equals(pid, orderItem.pid)) return false;
        if (!Objects.equals(title, orderItem.title)) return false;
        if (!Objects.equals(image, orderItem.image)) return false;
        if (!Objects.equals(unitPrice, orderItem.unitPrice)) return false;
        return Objects.equals(num, orderItem.num);
    }

    @Override
    public int hashCode() {
        int result = super.hashCode();
        result = 31 * result + (id != null ? id.hashCode() : 0);
        result = 31 * result + (oid != null ? oid.hashCode() : 0);
        result = 31 * result + (pid != null ? pid.hashCode() : 0);
        result = 31 * result + (title != null ? title.hashCode() : 0);
        result = 31 * result + (image != null ? image.hashCode() : 0);
        result = 31 * result + (unitPrice != null ? unitPrice.hashCode() : 0);
        result = 31 * result + (num != null ? num.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "OrderItem{" +
                "id=" + id +
                ", oid=" + oid +
                ", pid=" + pid +
                ", title='" + title + '\'' +
                ", image='" + image + '\'' +
                ", unitPrice=" + unitPrice +
                ", num=" + num +
                '}';
    }
}
