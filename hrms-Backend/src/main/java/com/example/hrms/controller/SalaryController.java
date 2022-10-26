package com.example.hrms.controller;

import com.example.hrms.entity.Salary;
import com.example.hrms.service.SalaryService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/salary/")
@RequiredArgsConstructor
public class SalaryController implements BaseController<Salary, Long> {
    @Autowired
    private SalaryService salaryService;

    @Override
    public ResponseEntity<Salary> save(@RequestBody Salary salary) {
        salaryService.save(salary);
        return ResponseEntity.ok(salary);
    }

    @Override
    public ResponseEntity<String> update(@RequestBody Salary salary) throws Exception {
        try {
            salaryService.update(salary);
            return ResponseEntity.ok("Successfully user information has been update");
        } catch (Exception e) {
            return ResponseEntity.unprocessableEntity().body(e.getMessage());
        }
    }

    @Override
    public ResponseEntity<String> deleteByIds(@PathVariable("ids") Long... ids) {
        salaryService.deleteByIds(ids);
        return ResponseEntity.ok("ID: " + Arrays.toString(ids) + " has been deleted successfully");
    }

    @Override
    public ResponseEntity<List<Salary>> getDataByIds(@PathVariable("ids") Long... ids) {
        List<Salary> usersList = salaryService.getDataByIds(ids);
        return ResponseEntity.ok(usersList);
    }

    @GetMapping(value = "salary-list/{ids}")
    public ResponseEntity<List<Salary>> getSalaryByIds(@PathVariable("ids") Long... ids) {
        List<Salary> usersList = salaryService.getSalaryByIds(ids);
        return ResponseEntity.ok(usersList);
    }

    @Override
    public List<Salary> getData() {
        return salaryService.getData();
    }

    @GetMapping("id-list")
    public Object[][] getEmployeeIds() {
        return salaryService.getEmployeeIds();
    }

    @GetMapping("salary-in/{employeeId}")
    public ResponseEntity<String> punchIn(@PathVariable("employeeId") Long employeeId) {
        salaryService.salaryDate(employeeId);
        return ResponseEntity.ok("Successful updated");
    }


}
