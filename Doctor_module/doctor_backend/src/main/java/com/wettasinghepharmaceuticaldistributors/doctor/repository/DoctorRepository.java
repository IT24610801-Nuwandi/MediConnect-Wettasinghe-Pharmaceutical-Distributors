package com.wettasinghepharmaceuticaldistributors.doctor.repository;

import com.wettasinghepharmaceuticaldistributors.doctor.model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {
    Optional<Doctor> findByLicenseNo(String licenseNo);
    Optional<Doctor> findByEmail(String email);
}
