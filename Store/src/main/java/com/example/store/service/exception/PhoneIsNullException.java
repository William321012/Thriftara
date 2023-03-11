package com.example.store.service.exception;

public class PhoneIsNullException extends ServiceException{

    public PhoneIsNullException() {
        super();
    }

    public PhoneIsNullException(String message) {
        super(message);
    }

    public PhoneIsNullException(String message, Throwable cause) {
        super(message, cause);
    }

    public PhoneIsNullException(Throwable cause) {
        super(cause);
    }

    protected PhoneIsNullException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
