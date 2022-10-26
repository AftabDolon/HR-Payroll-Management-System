package com.example.hrms.entity;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Data
@Entity
@Table(name = "users")
public class Users extends BaseEntity {
    @Column(name = "username", nullable = false, unique = true)
    private String username;

    @Column(name = "password", nullable = false)
    private String password;

    @NotBlank(message = "Please Enter a Email Address.")
    @Email(message = "Please provide a valid Email.")
    @Column(name = "email", nullable = false, unique = true)
    private String email;
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
    private Employee employee;
    @Column(name = "status")
    private Boolean status;
    @Column(name = "activity")
    private String activity;

}
