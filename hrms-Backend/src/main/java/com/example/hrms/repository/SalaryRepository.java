package com.example.hrms.repository;

import com.example.hrms.entity.Salary;
import com.example.hrms.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SalaryRepository extends JpaRepository<Salary, Long> {
    @Query("SELECT s FROM Salary s WHERE s.id IN(:ids)")
    List<Salary> getByIds(@Param("ids") List<Long> ids);

    @Query(value = "select id, employee_name from employee_info", nativeQuery = true)
    Object[][] getEmployeeIds();

    @Query("SELECT s FROM Salary s WHERE s.employee.id IN(:ids)")
    List<Salary> getSalaryByIds(@Param("ids") List<Long> ids);
}
