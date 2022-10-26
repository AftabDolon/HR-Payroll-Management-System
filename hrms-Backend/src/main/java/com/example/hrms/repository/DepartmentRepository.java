package com.example.hrms.repository;

import com.example.hrms.entity.Department;
import com.example.hrms.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long> {
    @Query("SELECT d FROM Department d WHERE d.id IN(:ids)")
    List<Department> getByIds(@Param("ids") List<Long>ids);
}
