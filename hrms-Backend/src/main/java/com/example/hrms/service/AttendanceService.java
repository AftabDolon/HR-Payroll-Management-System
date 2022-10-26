package com.example.hrms.service;

import com.example.hrms.entity.Attendance;


public interface AttendanceService extends BaseService <Attendance, Long> {

    void punchIn(Long employeeId);

    void punchOut(String employeeId);
}
