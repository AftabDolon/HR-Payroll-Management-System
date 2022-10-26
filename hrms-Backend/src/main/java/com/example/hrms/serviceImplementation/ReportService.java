package com.example.hrms.serviceImplementation;

import com.example.hrms.entity.Employee;
import com.example.hrms.repository.EmployeeRepository;
import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ReportService {


    @Autowired
    private EmployeeRepository employeeRepository;

    public byte[] exportReport(String reportFormat, Long id) throws FileNotFoundException, JRException {
        String path = "C:\\Users\\Administrator\\Desktop\\New User";
        List<Employee> emplyees = employeeRepository.findAllById(Arrays.asList(id));
        emplyees.add(0, new Employee());
        List<Employee> userId = employeeRepository.findAll();
        File file = ResourceUtils.getFile("classpath:salary.jrxml");
        JasperReport jasperReport = JasperCompileManager.compileReport(file.getAbsolutePath());
        JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource(emplyees);
        Map<String, Object> parameters = new HashMap<String, Object>();
        parameters.put("CollectionBeanParam", dataSource);
        JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parameters, dataSource);

        if (reportFormat.equalsIgnoreCase("html")) {
            return JasperExportManager.exportReportToPdf(jasperPrint);
        }
        if (reportFormat.equalsIgnoreCase("pdf")) {
            return JasperExportManager.exportReportToPdf(jasperPrint);
        }
        return "".getBytes();
    }
}
