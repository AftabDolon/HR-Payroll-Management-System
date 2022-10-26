package com.example.hrms.service;

import com.example.hrms.entity.Employee;
import com.example.hrms.entity.Salary;

import java.util.List;

public interface EmployeeService extends BaseService<Employee, Long> {
    Object[][] getEmployeeIds();

    Object[][] getEmployee(String employeeName);

    Object[] getDesignationList();

    String getSalary(Long ids);

    Object getDepartmentList();

    Object getEmployeeList();

    List<Employee> getEmployeeByIds(Long... ids);

    int employeeSalaryAndTypeUpdate(String salary, String employeeType, Long id);
}
