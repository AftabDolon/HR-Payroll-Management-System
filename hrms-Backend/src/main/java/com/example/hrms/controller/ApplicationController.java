package com.example.hrms.controller;

import com.example.hrms.entity.Application;
import com.example.hrms.service.ApplicationService;
import com.example.hrms.serviceImplementation.ApplicationServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/application/")
@RequiredArgsConstructor
public class ApplicationController implements BaseController<Application, Long> {

    @Autowired
    private ApplicationService applicationService;
    private ApplicationServiceImpl applicationServiceimpl;

    @Override
    public ResponseEntity<Application> save(@RequestBody Application application) {
        applicationService.save(application);
        return ResponseEntity.ok(application);
    }

    @Override
    public ResponseEntity<String> update(@RequestBody Application application) throws Exception {
        applicationService.update(application);
        return ResponseEntity.ok(null);
    }

    @Override
    public ResponseEntity<?> deleteByIds(Long... longs) {
        return null;
    }

    @Override
    public ResponseEntity<List<Application>> getDataByIds(@PathVariable("ids") Long... ids) {

        List<Application> applications = applicationService.getDataByIds(ids);
        return ResponseEntity.ok(applications);
    }


    @GetMapping(value = "listSingle/{ids}")
    public ResponseEntity<List<Application>> getDataBySingleIds(@PathVariable("ids") Long... ids) {

        List<Application> applications = applicationService.getDataBySingleIds(ids);
        return ResponseEntity.ok(applications);
    }


    @Override
    public List<Application> getData() {

        return applicationService.getData();
    }


    @GetMapping("approved-list")
    public Object getApprovedApplication() {
        return applicationService.getApprovedList();
    }

    @GetMapping("pending-list")
    public Object getPendingApplication() {
        return applicationService.getPendingList();
    }
}
