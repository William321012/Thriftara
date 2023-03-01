package com.example.store.pojo;

import java.util.Objects;

public class City {
    private Integer cid;
    private String cityName;
    private String state;

    public Integer getCid() {
        return cid;
    }

    public void setCid(Integer cid) {
        this.cid = cid;
    }

    public String getCityName(){
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        City city = (City) o;

        if (!Objects.equals(cid, city.cid)) return false;
        if (!Objects.equals(cityName, city.cityName)) return false;
        return Objects.equals(state, city.state);
    }

    @Override
    public int hashCode() {
        int result = cid != null ? cid.hashCode() : 0;
        result = 31 * result + (cityName != null ? cityName.hashCode() : 0);
        result = 31 * result + (state != null ? state.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "City{" +
                "cid=" + cid +
                ", cityName='" + cityName + '\'' +
                ", state='" + state + '\'' +
                '}';
    }
}
