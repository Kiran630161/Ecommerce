package com.example.pract.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pract.entity.User;
import com.example.pract.repository.UserRepository;
//import com.teks.spring.Repository.ProductRepository;
//import com.teks.spring.entity.Products;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins ="*")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @GetMapping("/test")
    public List<User> test() {
        return userRepository.findAll();
    }
 
    @PostMapping("/login")
    public User login(@RequestBody User user) {

        User existingUser = userRepository
            .findByEmailAndPassword(user.getEmail(), user.getPassword());

        if (existingUser == null) {
            throw new RuntimeException("Invalid credentials");
        }

        return existingUser; // 🔥 MUST return full object (with ID)
    }
}