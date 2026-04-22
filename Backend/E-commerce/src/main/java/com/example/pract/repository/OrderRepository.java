package com.example.pract.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.pract.entity.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
	List<Order> findByUserId(int userId);
}