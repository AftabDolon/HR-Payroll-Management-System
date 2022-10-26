package com.example.hrms.service;

import com.example.hrms.entity.Users;

public interface UserService extends BaseService <Users, Long> {

    int updateStatusUser(Boolean status, Long id);

    int updateActivityUser(String activity, Long id);

    int userPasswordChange(String password, Long id);
//    void deleteByIds(ID...ids);
}
