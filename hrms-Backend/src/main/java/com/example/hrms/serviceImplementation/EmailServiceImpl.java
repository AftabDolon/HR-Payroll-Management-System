package com.example.hrms.serviceImplementation;

import org.springframework.stereotype.Service;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

@Service
public class EmailServiceImpl {

    public boolean sendEmail(String subject, String message, String to) {
        boolean f = false;
        String from = "mdaftab453@gmail.com";
        String host = "smtp.gmail.com";
        Properties properties = System.getProperties();
        System.out.println("propertice " + properties);

        properties.put("mail.smtp.host", host);
        properties.put("mail.smtp.port", "465");
        properties.put("mail.smtp.ssl.enable", "true");
        properties.put("mail.smtp.auth", "true");


        Session session = Session.getInstance(properties, new Authenticator() {
            @Override

            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication("mdaftab453@gmail.com", "qjthctcxkfmxkozg");
            }

        });
        session.setDebug(true);

        //step 2: Compose the message [text, multi media]
        MimeMessage m = new MimeMessage(session);

        try {
            m.setFrom(from);
            m.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
            m.setSubject(subject);
            m.setText(message);
            Transport.send(m);
            System.out.println("Sent success..............");
            f = true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return f;

    }

//    @Override
//    public void save(Long employeeId) {
//        Attendance attendance = new Attendance();
//        if (employeeId != null) {
//            LocalDateTime entrytime = LocalDateTime.now();
//
//            int hour = entrytime.getHour();
//            int minute = entrytime.getMinute();
//            if((hour == 9 && minute > 15) || (hour > 9)){
//                attendance.setStatus("Late");
//            } else {
//                attendance.setStatus("Present");
//            }
//
//            attendance.setEmployeeId(new Employee(employeeId));
//            attendance.setPunchIn(new Date());
//            attendanceRepository.save(attendance);
//        }
//    }
}
