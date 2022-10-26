package com.example.hrms.serviceImplementation;

import com.example.hrms.entity.Employee;
import com.example.hrms.entity.Salary;
import com.example.hrms.repository.SalaryRepository;
import com.example.hrms.service.SalaryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class SalaryServiceImplementation implements SalaryService {
    private final SalaryRepository salaryRepository;

    @Override
    public Salary save(Salary salary) {
        salary.setPaymentDate(new Date());

        return salaryRepository.save(salary);
    }

    @Override
    public Salary update(Salary salary) throws Exception {
        return null;
    }

    @Override
    public void deleteByIds(Long... ids) {
        salaryRepository.deleteAllById(Arrays.asList(ids));
    }

    @Override
    public List<Salary> getDataByIds(Long... ids) {
        return salaryRepository.getByIds(Arrays.asList(ids));
    }

    public List<Salary> getSalaryByIds(Long... ids) {
        return salaryRepository.getSalaryByIds(Arrays.asList(ids));
    }

    @Override
    public List<Salary> getData() {
        return salaryRepository.findAll();
    }


    @Override
    public Object[][] getEmployeeIds() {
        return salaryRepository.getEmployeeIds();
    }

    @Override
    public void salaryDate(Long employeeId) {
        Salary salary = new Salary();
        Employee employee = new Employee();
        if (employeeId != null) {

            salary.setPaymentDate(new Date());
            salary.setGrossSalary(employee.getSalary());
            salaryRepository.save(salary);
        }
    }

}
