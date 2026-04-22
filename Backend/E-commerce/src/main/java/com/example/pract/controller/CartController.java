package com.example.pract.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pract.entity.Cart;
import com.example.pract.repository.CartRepository;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin
public class CartController {

    @Autowired
    private CartRepository cartRepository;

    // 🔹 Add to Cart
    @PostMapping("/add")
    public Cart addToCart(@RequestBody Cart cart) {

        System.out.println("Incoming Cart: " + cart.getTitle()); // DEBUG

        if (cart.getUserId() == null) {
            throw new RuntimeException("User ID is missing!");
        }

        return cartRepository.save(cart);
    }

    // 🔹 Get Cart by User
    @GetMapping("/{userId}")
    public List<Cart> getCart(@PathVariable Long userId) {
        return cartRepository.findByUserId(userId);
    }

    // 🔹 Delete item
    @DeleteMapping("/{id}")
    public void deleteItem(@PathVariable Long id) {
        cartRepository.deleteById(id);
    }

    // 🔹 Update quantity
    @PutMapping("/{id}")
    public Cart updateCart(@PathVariable Long id, @RequestBody Cart updatedCart) {
        Cart cart = cartRepository.findById(id).get();
        cart.setQuantity(updatedCart.getQuantity());
        return cartRepository.save(cart);
    }
}
