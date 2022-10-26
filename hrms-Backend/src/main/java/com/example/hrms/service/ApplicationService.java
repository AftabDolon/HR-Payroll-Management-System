package com.example.hrms.service;

import com.example.hrms.entity.Application;

import java.util.List;


public interface ApplicationService extends BaseService<Application, Long> {

    List<Application> getDataBySingleIds(Long... ids);

    Object getApprovedList();

    Object getPendingList();
}
