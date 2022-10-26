package com.example.hrms.repository;

import com.example.hrms.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
@Repository
public interface UserRepository extends JpaRepository<Users, Long> {
    @Query("SELECT u FROM Users u WHERE u.id IN(:ids)")
    List<Users> getByIds(@Param("ids") List<Long>ids);

    @Transactional
    @Modifying
    @Query("UPDATE Users u SET u.status = ?1 where u.id = ?2")
    int setStatusForUser(Boolean status, Long id);

    @Transactional
    @Modifying
    @Query("UPDATE Users u SET u.activity = ?1 where u.id = ?2")
    int setActivityForUser(String activity, Long id);

    @Transactional
    @Modifying
    @Query("UPDATE Users u SET u.password = ?1 where u.id = ?2")
    int userPasswordChange(String password, Long id);
}
