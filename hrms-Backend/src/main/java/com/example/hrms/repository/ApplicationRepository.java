package com.example.hrms.repository;

import com.example.hrms.entity.Application;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ApplicationRepository extends JpaRepository<Application, Long> {
    @Query("SELECT u FROM Application u WHERE u.id IN(:ids)")
    List<Application> getByIds(@Param("ids") List<Long> ids);

    @Query("SELECT u FROM Application u WHERE u.employee.id IN(:ids)")
    List<Application> getBySingleIds(@Param("ids") List<Long> ids);

    @Query("SELECT count(u.status) FROM Application u WHERE u.status='Approved'")
    Object getApprovedList();

    @Query("SELECT count(u.status) FROM Application u WHERE u.status='Pending'")
    Object getPendingList();

//    @Transactional
//    @Modifying
//    @Query("UPDATE Users u SET u.status = ?1 where u.id = ?2")
//    int setStatusForUser(Boolean status, Long id);
//
//    @Transactional
//    @Modifying
//    @Query("UPDATE Users u SET u.activity = ?1 where u.id = ?2")
//    int setActivityForUser(String activity, Long id);

    @Modifying
    @Query("UPDATE Application u SET u.status = ?1 where u.id = ?2")
    int updateStatus(String status, Long id);
}
