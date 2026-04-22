package com.example.pract.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.pract.entity.Cart;

import java.util.List;

public interface CartRepository extends JpaRepository<Cart, Long> {

    List<Cart> findByUserId(Long userId);

}
