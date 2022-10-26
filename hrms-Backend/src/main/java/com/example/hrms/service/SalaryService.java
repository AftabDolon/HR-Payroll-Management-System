package com.example.hrms.service;

import com.example.hrms.entity.Salary;

import java.util.List;


public interface SalaryService extends BaseService<Salary, Long> {
    void salaryDate(Long employeeId);

    Object[][] getEmployeeIds();

    List<Salary> getSalaryByIds(Long... ids);

}
