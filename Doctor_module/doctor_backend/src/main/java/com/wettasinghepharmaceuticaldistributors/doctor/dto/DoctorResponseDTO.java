package com.wettasinghepharmaceuticaldistributors.doctor.dto;

import lombok.Data;

@Data
public class DoctorResponseDTO {
    private Long id;
    private String name;
    private String email;
    private String licenseNo;
    private String licenseFilePath;
    private String verifyStatus;
}
