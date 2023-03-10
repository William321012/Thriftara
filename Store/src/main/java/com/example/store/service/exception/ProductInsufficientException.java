package com.example.store.service.exception;

public class ProductInsufficientException extends ServiceException{
    public ProductInsufficientException() {
        super();
    }

    public ProductInsufficientException(String message) {
        super(message);
    }

    public ProductInsufficientException(String message, Throwable cause) {
        super(message, cause);
    }

    public ProductInsufficientException(Throwable cause) {
        super(cause);
    }

    protected ProductInsufficientException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
