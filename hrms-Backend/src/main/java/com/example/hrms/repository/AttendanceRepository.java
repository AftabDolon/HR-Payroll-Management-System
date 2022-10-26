package com.example.hrms.repository;

import com.example.hrms.entity.Attendance;
import com.example.hrms.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface AttendanceRepository extends JpaRepository<Attendance, Long> {
    @Query("SELECT a FROM Attendance a WHERE a.id IN(:ids)")
    List<Attendance> getByIds(@Param("ids") List<Long> ids);


    @Transactional
    @Modifying
    @Query(value = "UPDATE Attendance a SET a.punch_out = localtimestamp() WHERE a.employee_id_id = :employeeId AND date(a.punch_in) = curdate()", nativeQuery = true)
    int punchOut(@Param("employeeId") String employeeId);

    @Transactional
    @Modifying
    @Query(value = "UPDATE Attendance a SET a.status = :status WHERE a.employee_id_id = :employeeId AND date(a.punch_in) = date(:punchIn)", nativeQuery = true)
    int updateStatus(@Param("status") String status,@Param("employeeId") Long employeeId, @Param("punchIn") Date date);

    @Query("SELECT a FROM Attendance a WHERE DATE(a.punchIn) between :start and :end")
    List<Attendance> findByPunchInBetween(@Param("start")Date start, @Param("end")Date end);

    @Query("SELECT a FROM Attendance a WHERE a.employeeId.id IN(:ids) AND DATE(a.punchIn) between :start and :end")
    List<Attendance> getByIdsBetween(@Param("ids") List<Long> ids, @Param("start")Date start, @Param("end")Date end);

    @Query("SELECT a FROM Attendance a WHERE a.employeeId.id IN(:ids)")
    List<Attendance> getByIdsSingle(@Param("ids") List<Long> ids);

}
