package com.example.hrms.entity;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Pattern;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "employee_info")
public class Employee extends BaseEntity {
//    @Pattern(regexp = "[A-Z]+[A-Z0-9]+", message = "Please Provide valid Employee ID. i.e. IDB123456")
    @Column(name = "employee_id", nullable = false)
    private String employeeId;

    @Column(name = "employee_name")
    private String employeeName;

    @Column(name = "employee_designation")
    private String employeeDesignation;

    @Column(name = "department")
    private String department;

    @Column(name = "phone")
    private String phone;

    @Column(name = "joining_date")
    private String joiningDate;

    @Column(name = "email")
    private String email;

    @Column(name = "nid_number")
    private String nidNumber;

    @Column(name = "blood_group")
    private String bloodGroup;

    @Column(name = "present_address")
    private String presentAddress;

    @Column(name = "permanent_address")
    private String permanentAddress;

    @Column(name = "salary")
    private String salary;

    @Column(name = "educational_status")
    private String educationalStatus;

    @Column(name = "employee_type")
    private String employeeType;

    @Column(name = "role")
    private String role;

    @Column(name = "image")
    private String image;

    @Lob
    @Column(name = "employee_image", columnDefinition = "LONGBLOB")
    private String employeeImage;

    public Employee() {
    }

    public Employee(String employeeId, String employeeName, String employeeDesignation, String department, String phone, String joiningDate, String email, String nidNumber, String bloodGroup, String presentAddress, String permanentAddress, String salary, String educationalStatus, String employeeType, String role, String image, String employeeImage) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.employeeDesignation = employeeDesignation;
        this.department = department;
        this.phone = phone;
        this.joiningDate = joiningDate;
        this.email = email;
        this.nidNumber = nidNumber;
        this.bloodGroup = bloodGroup;
        this.presentAddress = presentAddress;
        this.permanentAddress = permanentAddress;
        this.salary = salary;
        this.educationalStatus = educationalStatus;
        this.employeeType = employeeType;
        this.role = role;
        this.image = image;
        this.employeeImage = employeeImage;
    }

    public Employee(Long id) {
        setId(id);
    }


}
