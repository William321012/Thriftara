package com.example.store.Interceptor;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

public class LoginInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
//
//        response.setHeader("Access-Control-Allow-Origin", request.getHeader("http://localhost:3000"));
//        response.setHeader("Access-Control-Allow-Headers",
//                "Authorization,Origin, X-Requested-With, Content-Type, Accept,Access-Token");// Origin,
//                                                                                             // X-Requested-With,
//                                                                                             // Content-Type,
//                                                                                             // Accept,Access-Token

        Object cid = request.getSession().getAttribute("cid");
        if (cid == null) {
            response.sendRedirect("/web/login.html");
            return false;
        }
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
            ModelAndView modelAndView) throws Exception {
        HandlerInterceptor.super.postHandle(request, response, handler, modelAndView);
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
            throws Exception {
        HandlerInterceptor.super.afterCompletion(request, response, handler, ex);
    }
}
