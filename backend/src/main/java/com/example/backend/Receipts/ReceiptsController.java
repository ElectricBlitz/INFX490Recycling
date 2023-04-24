package com.example.backend.Receipts;

import java.util.List;
import java.util.ArrayList;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class ReceiptsController {
    @Autowired
    private ReceiptsRepository ReceiptsRepository;

    @GetMapping("/receipts")
    public ResponseEntity<List<Receipts>> getAllReceipts(@RequestParam(required = false) String username) {
    try {
      List<Receipts> receipts = new ArrayList<Receipts>();

      if (username == null)
        ReceiptsRepository.findAll().forEach(receipts::add);
      else
        ReceiptsRepository.findByUsernameContaining(username).forEach(receipts::add);

      if (receipts.isEmpty()){
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }

      return new ResponseEntity<>(receipts, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @GetMapping("/receipts/{id}")
  public ResponseEntity<Receipts> getReceiptsById(@PathVariable("id") long id) {
    Optional<Receipts> receiptData = ReceiptsRepository.findById(id);

    if (receiptData.isPresent()){
      return new ResponseEntity<>(receiptData.get(), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @PostMapping("/receipts")
  public ResponseEntity<Receipts> createReceipts(@RequestBody Receipts receipts) {
    try {
      Receipts _receipts = ReceiptsRepository.save(new Receipts(receipts.getReceipt_number(), receipts.getUsername(), receipts.getAmount()));
      return new ResponseEntity<>(_receipts, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @PutMapping("/receipts/{id}")
  public ResponseEntity<Receipts> updateReceipts(@PathVariable("id") long id, @RequestBody Receipts receipts) {
    Optional<Receipts> receiptsData = ReceiptsRepository.findById(id);

    if (receiptsData.isPresent()){
      Receipts _receipts = receiptsData.get();
      _receipts.setReceipt_number(receipts.getReceipt_number());
      _receipts.setUsername(receipts.getUsername());
      _receipts.setAmount(receipts.getAmount());
      return new ResponseEntity<>(ReceiptsRepository.save(_receipts), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @DeleteMapping("/receitps/{id}")
  public ResponseEntity<HttpStatus> deleteReceipts(@PathVariable("id") long id) {
    try {
      ReceiptsRepository.deleteById(id);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @DeleteMapping("/receipts")
  public ResponseEntity<HttpStatus> deleteAllReceipts() {
    try {
      ReceiptsRepository.deleteAll();
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
    
}
