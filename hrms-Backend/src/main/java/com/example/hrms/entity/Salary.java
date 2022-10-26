package com.example.hrms.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "salary")
public class Salary extends BaseEntity {


    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
    private Employee employee;
    @Column(name = "gross_salary")
    private String grossSalary;
    @Column(name = "payment_type")
    private String paymentType;
    @Column(name = "payment_date")
    private Date paymentDate;

//
//    @Transient
//    private Double basicSalary;
//    @Transient
//    private Double houseRent;
//    @Transient
//    private Double medicalAllowance;
//    @Transient
//    private Double transportAllowance;
//
//
//    public Double getBasicSalary() {
//        return grossSalary == null ? 0.0 : grossSalary / 100 * 50;
//    }
//
//    public Double getHouseRent() {
//        return grossSalary == null ? 0.0 :  basicSalary / 100 * 50;
//    }
//
//    public Double getMedicalAllowance() {
//        return grossSalary == null ? 0.0 : basicSalary / 100 * 25;
//    }
//
//    public Double getTransportAllowance() {
//        return grossSalary == null ? 0.0 : basicSalary / 100 * 25;
//    }
}
