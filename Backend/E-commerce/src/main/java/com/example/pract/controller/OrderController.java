package com.example.pract.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.pract.entity.Order;
import com.example.pract.repository.OrderRepository;

import java.util.List;

@RestController
@RequestMapping("/api/order")
@CrossOrigin(origins = "http://localhost:5173")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @PostMapping("/place")
    public Order placeOrder(@RequestBody Order order) {
        return orderRepository.save(order);
    }

    @GetMapping("/{userId}")
    public List<Order> getOrdersByUser(@PathVariable int userId) {
        return orderRepository.findByUserId(userId);
    }
    
}