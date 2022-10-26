package com.example.hrms.serviceImplementation;

import com.example.hrms.entity.Attendance;
import com.example.hrms.entity.Employee;
import com.example.hrms.repository.AttendanceRepository;
import com.example.hrms.repository.EmployeeRepository;
import com.example.hrms.service.AttendanceService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.awt.dnd.InvalidDnDOperationException;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AttendanceServiceImpl implements AttendanceService {
    private final AttendanceRepository attendanceRepository;
    private final EmployeeRepository employeeRepository;

    @Override
    public Attendance save(Attendance attendance) {
        return attendanceRepository.save(attendance);
    }

    @Override
    public Attendance update(Attendance attendance) throws Exception {
        if (attendance.hasId()) {
            return save(attendance);
        } else {
            throw new InvalidDnDOperationException("Attendance id required for update operation");
        }
    }

    @Override
    public void deleteByIds(Long... ids) {
        attendanceRepository.deleteAllById(Arrays.asList(ids));
    }

    @Override
    public List<Attendance> getDataByIds(Long... ids) {
        return attendanceRepository.getByIds(Arrays.asList(ids));
    }

    @Override
    public List<Attendance> getData() {
        return attendanceRepository.findAll();
    }

    @Override
    public void punchIn(Long employeeId) {
        Attendance attendance = new Attendance();
        if (employeeId != null) {
            LocalDateTime entrytime = LocalDateTime.now();

            int hour = entrytime.getHour();
            int minute = entrytime.getMinute();
            if ((hour == 9 && minute > 15) || (hour > 9)) {
                attendance.setStatus("Late");
            } else {
                attendance.setStatus("Present");
            }

            attendance.setEmployeeId(new Employee(employeeId));
            attendance.setPunchIn(new Date());
            attendanceRepository.save(attendance);
        }
    }

    @Override
    public void punchOut(String employeeId) {
        attendanceRepository.punchOut(employeeId);
    }
}
