package com.example.hrms.repository;

import com.example.hrms.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    @Query("SELECT e FROM Employee e WHERE e.id IN(:ids)")
    List<Employee> getByIds(@Param("ids") List<Long> ids);

    @Query("SELECT e.salary FROM Employee e WHERE e.id IN(:ids)")
    String getSalaryById(@Param("ids") Long ids);

    @Query("SELECT e.id, e.employeeName FROM Employee e WHERE e.employeeDesignation IN(:employeeDesignation)")
    Object[][] getEmployee(@Param("employeeDesignation") String employeeDesignation);


    @Query(value = "select e.id from employee_info e where e.employee_id = :eid", nativeQuery = true)
    Optional<Long> findByEmployeeId(@Param("eid") String employeeId);

    @Query(value = "select id, employee_id from employee_info", nativeQuery = true)
    Object[][] getEmployeeIds();


    @Query("SELECT distinct(e.employeeDesignation) FROM Employee e")
    Object[] getDesignationList();

    @Query("SELECT count(distinct(e.department)) FROM Employee e")
    Object getDepartmentList();

    @Query("SELECT count(e.employeeName) FROM Employee e")
    Object getEmployeeList();

    @Query("SELECT e FROM Employee e  WHERE e.id IN(:ids)")
    List<Employee> getEmployeeByIds(@Param("ids") List<Long> ids);

    @Transactional
    @Modifying
    @Query("UPDATE Employee e SET e.salary = ?1, e.employeeType = ?2 where e.id = ?3")
    int employeeSalaryAndTypeUpdate(String salary, String employeeType, Long id);
}
