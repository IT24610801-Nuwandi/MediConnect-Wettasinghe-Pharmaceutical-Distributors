package com.wettasinghepharmaceuticaldistributors.doctor.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Entity
@Table(name = "Doctor")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String name;

    @Email
    @Column(unique = true, nullable = false)
    private String email;

    @NotBlank
    private String password; // ⚠️ Stored as BCrypt hash

    @Column(unique = true, nullable = false)
    private String licenseNo;

    private String licenseFilePath; // path/URL of uploaded license

    @Enumerated(EnumType.STRING)
    private VerifyStatus verifyStatus = VerifyStatus.PENDING;

    public enum VerifyStatus {
        PENDING, APPROVED, REJECTED
    }
}
