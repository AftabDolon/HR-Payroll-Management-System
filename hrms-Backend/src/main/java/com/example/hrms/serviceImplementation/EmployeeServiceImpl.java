package com.example.hrms.serviceImplementation;

import com.example.hrms.entity.Employee;
import com.example.hrms.helper.Helper;
import com.example.hrms.repository.EmployeeRepository;
import com.example.hrms.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.awt.dnd.InvalidDnDOperationException;
import java.util.Arrays;
import java.util.List;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private final EmployeeRepository employeeRepository;


    @Override
    public Employee save(Employee employees) {
        return employeeRepository.save(employees);
    }

    @Override
    public Employee update(Employee employees) throws Exception {
        if (employees.hasId()) {
            return save(employees);
        } else {
            throw new InvalidDnDOperationException("Employee id required for update operation");
        }
    }

    @Override
    public void deleteByIds(Long... ids) {
        employeeRepository.deleteAllById(Arrays.asList(ids));
    }

    @Override
    public List<Employee> getDataByIds(Long... ids) {
        return ids == null ? employeeRepository.findAll() : employeeRepository.getByIds(Arrays.asList(ids));
    }

    @Override
    public List<Employee> getData() {
        return employeeRepository.findAll();
    }

    @Override
    public Object[][] getEmployeeIds() {
        return employeeRepository.getEmployeeIds();
    }

    @Override
    public Object[][] getEmployee(String employeeDesignation) {
        return employeeRepository.getEmployee(employeeDesignation);
    }

    @Override
    public Object[] getDesignationList() {
        return employeeRepository.getDesignationList();
    }

    @Override
    public String getSalary(Long ids) {
        return employeeRepository.getSalaryById(ids);
    }

    @Override
    public Object getDepartmentList() {
        return employeeRepository.getDepartmentList();
    }

    @Override
    public Object getEmployeeList() {
        return employeeRepository.getEmployeeList();
    }

    @Override
    public List<Employee> getEmployeeByIds(Long... ids) {
        return employeeRepository.getEmployeeByIds(Arrays.asList(ids));
    }

    @Override
    public int employeeSalaryAndTypeUpdate(String salary, String employeeType, Long id) {
        return employeeRepository.employeeSalaryAndTypeUpdate(salary, employeeType, id);
    }

    public void save(MultipartFile file) {
        try {
            List<Employee> employees = Helper.convertExcelToListOfUser(file.getInputStream());
            this.employeeRepository.saveAll(employees);
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}
