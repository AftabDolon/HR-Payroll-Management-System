package com.example.hrms.controller;

import com.example.hrms.entity.Email;
import com.example.hrms.serviceImplementation.EmailServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController

@RequiredArgsConstructor
public class EmailController{
    @Autowired
    private EmailServiceImpl emailService;

    @RequestMapping("/welcome")
    public String welcome() {
        return "hello this is my email api";
    }

    //api to send email
    @RequestMapping(value = "/sendemail", method = RequestMethod.POST)
    public ResponseEntity<?> sendEmail(@RequestBody Email request) {
    request.setReceipt("aftabdolon47@gmail.com");
        System.out.println(request);
        boolean result = this.emailService.sendEmail(request.getSubject(), request.getMessage(), request.getReceipt());
        if (result) {
            return ResponseEntity.ok("Email is sent successfully...");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Email is not sent...");
        }
    }

//    @Override
//    public ResponseEntity<Email> save(@RequestBody Email email) {
//
//        return ResponseEntity.ok(email);
//    }
////    public ResponseEntity<Attendance> save(@RequestBody Attendance attendances) {
////        attendanceService.save(attendances);
////        return ResponseEntity.ok(attendances);
////    }
//
//    @Override
//    public ResponseEntity<String> update(Object o) throws Exception {
//        return null;
//    }
//
//    @Override
//    public ResponseEntity<?> deleteByIds(Object[] objects) {
//        return null;
//    }
//
//    @Override
//    public ResponseEntity<List> getDataByIds(Object[] objects) {
//        return null;
//    }
//
//    @Override
//    public List getData() {
//        return null;
//    }
}
