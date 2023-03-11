package com.example.store.pojo;

import java.util.Objects;

public class State {
    private Integer sid;

    private String code;

    private String name;

    public Integer getSid() {
        return sid;
    }

    public void setSid(Integer sid) {
        this.sid = sid;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        State state = (State) o;

        if (!Objects.equals(sid, state.sid)) return false;
        if (!Objects.equals(code, state.code)) return false;
        return Objects.equals(name, state.name);
    }

    @Override
    public int hashCode() {
        int result = sid != null ? sid.hashCode() : 0;
        result = 31 * result + (code != null ? code.hashCode() : 0);
        result = 31 * result + (name != null ? name.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "State{" +
                "sid=" + sid +
                ", code='" + code + '\'' +
                ", name='" + name + '\'' +
                '}';
    }
}
