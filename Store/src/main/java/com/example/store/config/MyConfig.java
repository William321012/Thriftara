package com.example.store.config;

import com.example.store.Interceptor.LoginInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class MyConfig implements WebMvcConfigurer {

    List<String> exclude = new ArrayList<>();
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        HandlerInterceptor handlerInterceptor = new LoginInterceptor();
        exclude.add("/web/login.html");
        exclude.add("/web/registration.html");
        exclude.add("/web/product.html");
        exclude.add("/web/index.html");
        exclude.add("/bootstrap/**");
        exclude.add("/css/**");
        exclude.add("/js/**");
        exclude.add("/images/**");
        exclude.add("/customers/reg");
        exclude.add("/customers/log");
        exclude.add("/products/**");

        registry.addInterceptor(handlerInterceptor).addPathPatterns("/**").excludePathPatterns(exclude);
    }


//    @Override
//    public void addResourceHandlers(ResourceHandlerRegistry registry) {
//
//        registry.addResourceHandler("/images").addResourceLocations("file:"+System.getProperty("user.dir")+"\\src\\main\\resources\\static\\images");
//    }


}
