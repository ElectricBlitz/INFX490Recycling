package com.example.backend.Comments;

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
public class CommentsController {
    @Autowired
    private CommentsRepository CommentsRepository;

    @GetMapping("/comments")
    public ResponseEntity<List<Comments>> getAllComments(@RequestParam(required = false) String username) {
    try {
      List<Comments> comments = new ArrayList<Comments>();

      if (username == null)
        CommentsRepository.findAll().forEach(comments::add);
      else
        CommentsRepository.findByUsernameContaining(username).forEach(comments::add);

      if (comments.isEmpty()){
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }

      return new ResponseEntity<>(comments, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @GetMapping("/comments/{id}")
  public ResponseEntity<Comments> getCommentsById(@PathVariable("id") long id) {
    Optional<Comments> commentData = CommentsRepository.findById(id);

    if (commentData.isPresent()){
      return new ResponseEntity<>(commentData.get(), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @PostMapping("/comments")
  public ResponseEntity<Comments> createComments(@RequestBody Comments comments) {
    try {
      Comments _comments = CommentsRepository.save(new Comments(comments.getUserName(), comments.getComment(), comments.getCreated()));
      return new ResponseEntity<>(_comments, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @PutMapping("/comments/{id}")
  public ResponseEntity<Comments> updateComments(@PathVariable("id") long id, @RequestBody Comments comments) {
    Optional<Comments> commentsData = CommentsRepository.findById(id);

    if (commentsData.isPresent()){
      Comments _comments = commentsData.get();
      _comments.setUserName(comments.getUserName());
      _comments.setComment(comments.getComment());
      _comments.setCreated(comments.getCreated());
      return new ResponseEntity<>(CommentsRepository.save(_comments), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @DeleteMapping("/comments/{id}")
  public ResponseEntity<HttpStatus> deleteComments(@PathVariable("id") long id) {
    try {
      CommentsRepository.deleteById(id);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @DeleteMapping("/comments")
  public ResponseEntity<HttpStatus> deleteAllComments() {
    try {
      CommentsRepository.deleteAll();
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
