package com.example.backend.Account;

public class AccountRegistrationDto {
    private String firstname;
    private String lastname;
    private String username;
    private String password;


    public AccountRegistrationDto(String firstname, String lastname, String username, String password) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.password = password;
    }


    public AccountRegistrationDto() {
    }


    public String getFirstname() {
        return firstname;
    }


    public String getLastname() {
        return lastname;
    }


    public String getUsername() {
        return username;
    }


    public String getPassword() {
        return password;
    }


    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }


    public void setLastname(String lastname) {
        this.lastname = lastname;
    }


    public void setUsername(String username) {
        this.username = username;
    }


    public void setPassword(String password) {
        this.password = password;
    }

    
}
