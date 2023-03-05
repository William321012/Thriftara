package com.example.store.service.exception;

public class ProductIsNullException extends ServiceException{
    public ProductIsNullException() {
        super();
    }

    public ProductIsNullException(String message) {
        super(message);
    }

    public ProductIsNullException(String message, Throwable cause) {
        super(message, cause);
    }

    public ProductIsNullException(Throwable cause) {
        super(cause);
    }

    protected ProductIsNullException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
