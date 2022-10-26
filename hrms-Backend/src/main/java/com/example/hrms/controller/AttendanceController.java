package com.example.hrms.controller;

import com.example.hrms.entity.Attendance;
import com.example.hrms.repository.AttendanceRepository;
import com.example.hrms.repository.EmployeeRepository;
import com.example.hrms.service.AttendanceService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/attendance/")
@RequiredArgsConstructor
public class AttendanceController implements BaseController<Attendance, Long> {
    @Autowired
    private AttendanceService attendanceService;
    @Autowired
    private AttendanceRepository attendanceRepository;
    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public ResponseEntity<Attendance> save(@RequestBody Attendance attendances) {
        attendanceService.save(attendances);
        return ResponseEntity.ok(attendances);
    }

    @Override
    public ResponseEntity<String> update(@RequestBody Attendance attendances) throws Exception {
        try {
            attendanceService.update(attendances);
            return ResponseEntity.ok("Successfully attendance information has been update");
        } catch (Exception e) {
            return ResponseEntity.unprocessableEntity().body(e.getMessage());
        }
    }

    @Override
    public ResponseEntity<String> deleteByIds(@PathVariable("ids") Long... ids) {
        attendanceService.deleteByIds(ids);
        return ResponseEntity.ok("ID: " + Arrays.toString(ids) + " has been deleted successfully");
    }

    @Override
    public ResponseEntity<List<Attendance>> getDataByIds(@PathVariable("ids") Long... ids) {
        List<Attendance> attendancesList = attendanceService.getDataByIds(ids);
        return ResponseEntity.ok(attendancesList);
    }

    @Override
    public List<Attendance> getData() {

        return attendanceService.getData();
    }


    @GetMapping("punch-in/{employeeId}")
    public ResponseEntity<String> punchIn(@PathVariable("employeeId") Long employeeId) {
        attendanceService.punchIn(employeeId);
        return ResponseEntity.ok("Successful updated");
    }

    @GetMapping("punch-out/{employeeId}")
    public ResponseEntity<String> punchOut(@PathVariable("employeeId") String employeeId) {
        attendanceService.punchOut(employeeId);
        return ResponseEntity.ok("Successfully update");
    }

    @GetMapping("date")
    public ResponseEntity<List<Attendance>> getAttendanceByDate(@RequestParam Date start, @RequestParam Date end) {
        end.setTime(end.getTime() + 86400000);
        return new ResponseEntity<List<Attendance>>(attendanceRepository.findByPunchInBetween(start, end), HttpStatus.OK);
    }

    @GetMapping("dateById")
    public ResponseEntity<List<Attendance>> getAttendanceByIdDate(@RequestParam Date start, @RequestParam Date end, @RequestParam List<Long> ids) {
        end.setTime(end.getTime() + 86400000);
        return new ResponseEntity<List<Attendance>>(attendanceRepository.getByIdsBetween(ids, start, end), HttpStatus.OK);
    }
@GetMapping("attendanceById")
    public ResponseEntity<List<Attendance>> getByIdsSingle(@RequestParam List<Long> ids) {
        return new ResponseEntity<List<Attendance>>(attendanceRepository.getByIdsSingle(ids), HttpStatus.OK);
    }


}
