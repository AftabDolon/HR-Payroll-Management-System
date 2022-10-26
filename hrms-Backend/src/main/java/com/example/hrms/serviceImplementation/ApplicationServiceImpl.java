package com.example.hrms.serviceImplementation;

import com.example.hrms.entity.Application;
import com.example.hrms.repository.ApplicationRepository;
import com.example.hrms.repository.AttendanceRepository;
import com.example.hrms.service.ApplicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ApplicationServiceImpl implements ApplicationService {

    private final ApplicationRepository applicationRepository;
    private final AttendanceRepository attendanceRepository;

    @Override
    public Application save(Application application) {
        application.setApplicationDate(new Date());
        application.setStatus("Pending");
        return applicationRepository.save(application);
    }

    @Transactional
    @Override
    public Application update(Application application) throws Exception {

        applicationRepository.updateStatus(application.getStatus(), application.getId());
        if (application.getStatus().equals("Approved")) {
            attendanceRepository.updateStatus("Present", application.getEmployee().getId(), application.getAttendanceDate());
        }

        return application;
    }

    @Override
    public void deleteByIds(Long... ids) {

    }

    @Override
    public List<Application> getDataByIds(Long... ids) {
        return applicationRepository.getByIds(Arrays.asList(ids));
    }
@Override
    public List<Application> getDataBySingleIds(Long... ids) {
        return applicationRepository.getBySingleIds(Arrays.asList(ids));
    }

    @Override
    public Object getApprovedList() {
        return applicationRepository.getApprovedList();
    }

    @Override
    public Object getPendingList() {
        return applicationRepository.getPendingList();
    }

    @Override
    public List<Application> getData() {
        return applicationRepository.findAll();
    }
}
