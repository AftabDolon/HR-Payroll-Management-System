package com.example.hrms.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "applications")
public class Application extends BaseEntity {

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
    private Employee employee;

    @Column(name = "applicationDate")
    private Date applicationDate;
    @Column(name = "attendanceDate")
    private Date attendanceDate;

    @Column(name = "message")
    private String message;

    @Column(name = "status")
    private String status;
//
//    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
//    private Attendance attendance;


}
