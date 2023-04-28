package com.example.backend.Receipts;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import jakarta.persistence.Column;

@Entity
@Table(name ="Receipts", uniqueConstraints = @UniqueConstraint(columnNames = "receipt_number"))
public class Receipts {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "receipt_number")
    private String receipt_number;

    @Column(name = "username")
    private String username;

    @Column(name = "amount")
    private Double amount;

    public Receipts() {
    }

    public Receipts(String receipt_number, String username, Double amount) {
        this.receipt_number = receipt_number;
        this.username = username;
        this.amount = amount;
    }

    public Long getId() {
        return id;
    }

    public String getReceipt_number() {
        return receipt_number;
    }

    public String getUsername() {
        return username;
    }

    public Double getAmount() {
        return amount;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setReceipt_number(String receipt_number) {
        this.receipt_number = receipt_number;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }
}
