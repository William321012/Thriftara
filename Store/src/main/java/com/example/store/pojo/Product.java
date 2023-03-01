package com.example.store.pojo;

import java.io.Serializable;
import java.util.Objects;

public class Product extends BaseEntity implements Serializable {
    private Integer id;
    private Integer categoryId;
    private String itemType;
    private String itemDescription;
    private String title;
    private Integer num;
    private String image;
    private Integer itemStatus;
    private Integer priority;
    private String brand;
    private String size;
    private String itemCondition;
    private String color;
    private Integer gender;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }

    public String getItemType() {
        return itemType;
    }

    public void setItemType(String itemType) {
        this.itemType = itemType;
    }

    public String getItemDescription() {
        return itemDescription;
    }

    public void setItemDescription(String itemDescription) {
        this.itemDescription = itemDescription;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getNum() {
        return num;
    }

    public void setNum(Integer num) {
        this.num = num;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Integer getItemStatus() {
        return itemStatus;
    }

    public void setItemStatus(Integer itemStatus) {
        this.itemStatus = itemStatus;
    }

    public Integer getPriority() {
        return priority;
    }

    public void setPriority(Integer priority) {
        this.priority = priority;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getItemCondition() {
        return itemCondition;
    }

    public void setItemCondition(String itemCondition) {
        this.itemCondition = itemCondition;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Integer getGender() {
        return gender;
    }

    public void setGender(Integer gender) {
        this.gender = gender;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;

        Product product = (Product) o;

        if (!Objects.equals(id, product.id)) return false;
        if (!Objects.equals(categoryId, product.categoryId)) return false;
        if (!Objects.equals(itemType, product.itemType)) return false;
        if (!Objects.equals(itemDescription, product.itemDescription))
            return false;
        if (!Objects.equals(title, product.title)) return false;
        if (!Objects.equals(num, product.num)) return false;
        if (!Objects.equals(image, product.image)) return false;
        if (!Objects.equals(itemStatus, product.itemStatus)) return false;
        if (!Objects.equals(priority, product.priority)) return false;
        if (!Objects.equals(brand, product.brand)) return false;
        if (!Objects.equals(size, product.size)) return false;
        if (!Objects.equals(itemCondition, product.itemCondition))
            return false;
        if (!Objects.equals(color, product.color)) return false;
        return Objects.equals(gender, product.gender);
    }

    @Override
    public int hashCode() {
        int result = super.hashCode();
        result = 31 * result + (id != null ? id.hashCode() : 0);
        result = 31 * result + (categoryId != null ? categoryId.hashCode() : 0);
        result = 31 * result + (itemType != null ? itemType.hashCode() : 0);
        result = 31 * result + (itemDescription != null ? itemDescription.hashCode() : 0);
        result = 31 * result + (title != null ? title.hashCode() : 0);
        result = 31 * result + (num != null ? num.hashCode() : 0);
        result = 31 * result + (image != null ? image.hashCode() : 0);
        result = 31 * result + (itemStatus != null ? itemStatus.hashCode() : 0);
        result = 31 * result + (priority != null ? priority.hashCode() : 0);
        result = 31 * result + (brand != null ? brand.hashCode() : 0);
        result = 31 * result + (size != null ? size.hashCode() : 0);
        result = 31 * result + (itemCondition != null ? itemCondition.hashCode() : 0);
        result = 31 * result + (color != null ? color.hashCode() : 0);
        result = 31 * result + (gender != null ? gender.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", categoryId=" + categoryId +
                ", itemType='" + itemType + '\'' +
                ", itemDescription='" + itemDescription + '\'' +
                ", title='" + title + '\'' +
                ", num=" + num +
                ", image='" + image + '\'' +
                ", itemStatus=" + itemStatus +
                ", priority=" + priority +
                ", brand='" + brand + '\'' +
                ", size='" + size + '\'' +
                ", itemCondition='" + itemCondition + '\'' +
                ", color='" + color + '\'' +
                ", gender=" + gender +
                '}';
    }
}
