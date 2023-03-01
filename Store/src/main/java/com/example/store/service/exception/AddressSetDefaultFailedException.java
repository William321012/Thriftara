package com.example.store.service.exception;

public class AddressSetDefaultFailedException extends ServiceException{
    public AddressSetDefaultFailedException() {
        super();
    }

    public AddressSetDefaultFailedException(String message) {
        super(message);
    }

    public AddressSetDefaultFailedException(String message, Throwable cause) {
        super(message, cause);
    }

    public AddressSetDefaultFailedException(Throwable cause) {
        super(cause);
    }

    protected AddressSetDefaultFailedException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
