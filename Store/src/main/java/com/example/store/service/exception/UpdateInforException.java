package com.example.store.service.exception;

public class UpdateInforException extends ServiceException{
    public UpdateInforException() {
        super();
    }

    public UpdateInforException(String message) {
        super(message);
    }

    public UpdateInforException(String message, Throwable cause) {
        super(message, cause);
    }

    public UpdateInforException(Throwable cause) {
        super(cause);
    }

    protected UpdateInforException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
