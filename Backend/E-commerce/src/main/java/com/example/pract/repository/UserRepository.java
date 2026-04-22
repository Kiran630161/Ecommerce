package com.example.pract.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.pract.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmailAndPassword(String email, String password);
}

