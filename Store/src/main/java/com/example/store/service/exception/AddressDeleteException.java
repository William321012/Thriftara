package com.example.store.service.exception;

public class AddressDeleteException extends ServiceException{
    public AddressDeleteException() {
        super();
    }

    public AddressDeleteException(String message) {
        super(message);
    }

    public AddressDeleteException(String message, Throwable cause) {
        super(message, cause);
    }

    public AddressDeleteException(Throwable cause) {
        super(cause);
    }

    protected AddressDeleteException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
