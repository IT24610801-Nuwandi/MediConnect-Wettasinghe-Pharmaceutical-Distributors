package com.wettasinghepharmaceuticaldistributors.doctor.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class DoctorLoginDTO {
    @Email
    private String email;

    @NotBlank
    private String password;
}
