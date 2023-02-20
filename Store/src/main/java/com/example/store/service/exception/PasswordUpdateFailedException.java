package com.example.store.service.exception;

public class PasswordUpdateFailedException extends ServiceException{
    public PasswordUpdateFailedException() {
        super();
    }

    public PasswordUpdateFailedException(String message) {
        super(message);
    }

    public PasswordUpdateFailedException(String message, Throwable cause) {
        super(message, cause);
    }

    public PasswordUpdateFailedException(Throwable cause) {
        super(cause);
    }

    protected PasswordUpdateFailedException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
