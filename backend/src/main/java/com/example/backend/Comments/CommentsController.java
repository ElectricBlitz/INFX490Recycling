package com.example.backend.Comments;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CommentsController {
    @Autowired
    private CommentsRepository CommentsRepository;

    @GetMapping("api/Comments")
    public List<Comments> getAllComments() {
        return CommentsRepository.findAll();
    }
}
