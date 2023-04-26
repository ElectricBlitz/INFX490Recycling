package com.example.backend.Account;

import java.util.List;
import java.util.ArrayList;
import java.util.Optional;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.crypto.bcrypt.BCrypt;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class AccountController {
  @Autowired
  private AccountRepository AccountRepository;

  @GetMapping("/accounts")
  public ResponseEntity<List<Account>> getAllAccounts(@RequestParam(required = false) String username) {
  try {
    List<Account> accounts = new ArrayList<Account>();

    if (username == null)
      AccountRepository.findAll().forEach(accounts::add);
    else
      AccountRepository.findByUsernameContaining(username).forEach(accounts::add);

    if (accounts.isEmpty()){
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    return new ResponseEntity<>(accounts, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @PostMapping("/authenticate")
  public ResponseEntity<Boolean> authenticateAccount(@RequestParam(required = true) String username,@RequestParam(required = true) String password){
    
    try{
      if(AccountRepository.findByUsername(username) != null){
        if(BCrypt.checkpw(password, AccountRepository.findByUsername(username).getPassword())){
          return new ResponseEntity<>(true, HttpStatus.OK);
        } 
        else return new ResponseEntity<>(false, HttpStatus.NOT_ACCEPTABLE);
      }
      else return new ResponseEntity<>(false, HttpStatus.BAD_REQUEST);
    
    }
    catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @GetMapping("/accounts/{id}")
  public ResponseEntity<Account> getAccountById(@PathVariable("id") long id) {
    Optional<Account> accountData = AccountRepository.findById(id);

    if (accountData.isPresent()){
      return new ResponseEntity<>(accountData.get(), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @GetMapping("/accounts/getByUser/{username}")
  public ResponseEntity<Account> getAccountByUsername(@PathVariable("username") String username) {
    Account user = AccountRepository.findByUsername(username);
    
    if (user != null){
      return new ResponseEntity<>(user, HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @PostMapping("/accounts")
  public ResponseEntity<Account> createAccount(@RequestBody Account account) {
    try {
      String hash = BCrypt.hashpw(account.getPassword(), BCrypt.gensalt());
      Account _account = AccountRepository.save(new Account(account.getFirstName(), account.getLastName(), account.getUsername(), hash, account.getRewardsPoints(), account.getRole()));
      return new ResponseEntity<>(_account, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @PutMapping("/accounts/{id}")
  public ResponseEntity<Account> updateAccount(@PathVariable("id") long id, @RequestBody Account account) {
    Optional<Account> accountData = AccountRepository.findById(id);

    if (accountData.isPresent()){
      Account _account = accountData.get();
      _account.setFirstName(account.getFirstName());
      _account.setLastName(account.getLastName());
      _account.setUsername(account.getUsername());
      _account.setPassword(account.getPassword());
      _account.setRewardsPoints(account.getRewardsPoints());
      _account.setRole(account.getRole());
      return new ResponseEntity<>(AccountRepository.save(_account), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @DeleteMapping("/accounts/{id}")
  public ResponseEntity<HttpStatus> deleteAccount(@PathVariable("id") long id) {
    try {
      AccountRepository.deleteById(id);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @DeleteMapping("/accounts")
  public ResponseEntity<HttpStatus> deleteAllAccounts() {
    try {
      AccountRepository.deleteAll();
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  
}