package com.example.hrms.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.concurrent.TimeUnit;

@Data
@Entity
@Table(name = "attendance")
public class Attendance extends BaseEntity {
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
    private Employee employeeId;

    @Column(name = "punch_in", nullable = false)
    private Date punchIn;

    @Column(name = "punch_out")
    private Date punchOut;
    @Column(name = "status")
    private String status;

    @JsonProperty("workDuration")
    public String workDuration() {
        long time = Math.abs(punchOut.getTime() - punchIn.getTime());

        long seconds = (time / 1000) % 60;

        long minutes = (time / (1000 * 60)) % 60;

        long hours = (time / (1000 * 60 * 60)) % 24;

        return hours + " Hour " + minutes + " Minute " + seconds + " Second";
    }
}
