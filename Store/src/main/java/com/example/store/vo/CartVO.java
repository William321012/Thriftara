package com.example.store.vo;

import java.io.Serializable;
import java.util.Objects;

public class CartVO implements Serializable {

    //cartID
    private Integer id;
    //customerID
    private Integer cid;
    //productId
    private Integer pid;
    private Long unitPrice;
    private Integer num;
    private String title;
    private String image;
    private Long sum;

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

    public Long getSum() {
        return sum;
    }

    public void setSum(Long sum) {
        this.sum = sum;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        CartVO cartVO = (CartVO) o;

        if (!Objects.equals(id, cartVO.id)) return false;
        if (!Objects.equals(cid, cartVO.cid)) return false;
        if (!Objects.equals(pid, cartVO.pid)) return false;
        if (!Objects.equals(unitPrice, cartVO.unitPrice)) return false;
        if (!Objects.equals(num, cartVO.num)) return false;
        if (!Objects.equals(title, cartVO.title)) return false;
        if (!Objects.equals(image, cartVO.image)) return false;
        return Objects.equals(sum, cartVO.sum);
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (cid != null ? cid.hashCode() : 0);
        result = 31 * result + (pid != null ? pid.hashCode() : 0);
        result = 31 * result + (unitPrice != null ? unitPrice.hashCode() : 0);
        result = 31 * result + (num != null ? num.hashCode() : 0);
        result = 31 * result + (title != null ? title.hashCode() : 0);
        result = 31 * result + (image != null ? image.hashCode() : 0);
        result = 31 * result + (sum != null ? sum.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "CartVO{" +
                "id=" + id +
                ", cid=" + cid +
                ", pid=" + pid +
                ", unitPrice=" + unitPrice +
                ", num=" + num +
                ", title='" + title + '\'' +
                ", image='" + image + '\'' +
                ", sum=" + sum +
                '}';
    }
}
