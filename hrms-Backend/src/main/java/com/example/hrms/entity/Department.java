package com.example.hrms.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "departments")
public class Department extends BaseEntity {
    @Column(name = "department_id", nullable = false, unique = true)
    private Long departmentId;
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
    private Employee employeeId;
    @Column(name = "department_name", nullable = false)
    private String departmentName;


}
