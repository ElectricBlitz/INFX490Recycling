package com.example.backend.Receipts;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReceiptsRepository extends JpaRepository<Receipts, Long> {
    List<Receipts> findByReceiptNumberContaining(String receipt_number);
    Receipts findByReceiptNumber(String receipt_number);    
}
