package com.example.hrms.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "email")
public class Email extends BaseEntity{
    private String receipt;
    private String subject;
    private String message;

    public Email(String receipt, String subject, String message) {
        this.receipt = receipt;
        this.subject = subject;
        this.message = message;
    }

    public Email() {
    }

    @Override
    public String toString() {
        return "Email{" +
                "to='" + receipt + '\'' +
                ", subject='" + subject + '\'' +
                ", message='" + message + '\'' +
                '}';
    }
}
