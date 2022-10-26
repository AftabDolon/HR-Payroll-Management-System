package com.example.hrms.controller;

import com.example.hrms.entity.Employee;
import com.example.hrms.service.EmployeeService;
import com.example.hrms.serviceImplementation.EmployeeServiceImpl;
import com.example.hrms.serviceImplementation.ReportService;
import lombok.RequiredArgsConstructor;
import net.sf.jasperreports.engine.JRException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/employee/")
@RequiredArgsConstructor
public class EmployeeController implements BaseController<Employee, Long> {
    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private EmployeeServiceImpl employeeServiceImpl;
    @Autowired
    private ReportService reportService;

    @Override
    public ResponseEntity<Employee> save(@RequestBody Employee employees) {
        employeeService.save(employees);
        return ResponseEntity.ok(employees);
    }

    @Override
    public ResponseEntity<String> update(@RequestBody Employee employees) throws Exception {
        try {
            employeeService.update(employees);
            return ResponseEntity.ok("Successfully Employee information has been update");
        } catch (Exception e) {
            return ResponseEntity.unprocessableEntity().body(e.getMessage());
        }
    }

    @Override
    public ResponseEntity<String> deleteByIds(@PathVariable("ids") Long... ids) {
        employeeService.deleteByIds(ids);
        return ResponseEntity.ok("ID: " + Arrays.toString(ids) + " has been deleted successfully");
    }

    @Override
    public ResponseEntity<List<Employee>> getDataByIds(@PathVariable(value = "ids", required = false) Long... ids) {
        List<Employee> employeesList = employeeService.getDataByIds(ids);
        return ResponseEntity.ok(employeesList);
    }

    @Override
    public List<Employee> getData() {
        return employeeService.getData();
    }

    @GetMapping("id-list")
    public Object[][] getEmployeeIds() {
        return employeeService.getEmployeeIds();
    }

    @GetMapping("employee-list/{employeeDesignation}")
    public Object[][] getEmployees(@PathVariable("employeeDesignation") String employeeDesignation) {
        return employeeService.getEmployee(employeeDesignation);
    }

    @GetMapping("report/{format}/{id}")
    public void generateReport(@PathVariable String format, @PathVariable Long id, HttpServletResponse response) throws JRException, IOException {

        byte[] report = reportService.exportReport(format, id);
        response.addHeader("Content-Type", "application/pdf");
//        response.addHeader("Content-Disposition", "attachment; filename=user_list.pdf");
        OutputStream os = response.getOutputStream();
        os.write(report);
        os.flush();
    }

    @PostMapping("user/upload")
    public ResponseEntity<?> upload(@RequestParam("file") MultipartFile file) {

        //true

        this.employeeServiceImpl.save(file);

        return ResponseEntity.ok(null);
    }

    @GetMapping(value = "salaryEmployee/{ids}")
    public ResponseEntity<?> getSalaryByIds(@PathVariable("ids") Long ids) {
        String employee = employeeService.getSalary(ids);
        return ResponseEntity.ok(employee);
    }

    @GetMapping("department-list")
    public Object getDepartment() {
        return employeeService.getDepartmentList();
    }

    @GetMapping("employee-list")
    public Object getEmployee() {
        return employeeService.getEmployeeList();
    }

    @GetMapping("designation-list")
    public Object[] getDesignationIds() {
        return employeeService.getDesignationList();
    }

    @GetMapping(value = "employees-list/{ids}")
    public ResponseEntity<List<Employee>> getEmployeeIds(@PathVariable("ids") Long... ids) {
        List<Employee> usersList = employeeService.getEmployeeByIds(ids);
        return ResponseEntity.ok(usersList);
    }

    @GetMapping("salary-update/{id}/{salary}/{employeeType}")
    public ResponseEntity<?> salaryAndEmployeeTypeUpdate(@PathVariable("id") Long id, @PathVariable("salary") String salary, @PathVariable("employeeType") String employeeType) {
        employeeService.employeeSalaryAndTypeUpdate(salary, employeeType, id);
        return ResponseEntity.ok(null);
    }
}
