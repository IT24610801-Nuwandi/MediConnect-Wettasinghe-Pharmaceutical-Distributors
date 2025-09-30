package com.wettasinghepharmaceuticaldistributors.doctor.service;

import com.wettasinghepharmaceuticaldistributors.doctor.dto.DoctorRegistrationDTO;
import com.wettasinghepharmaceuticaldistributors.doctor.dto.DoctorResponseDTO;
import com.wettasinghepharmaceuticaldistributors.doctor.dto.DoctorLoginDTO;
import com.wettasinghepharmaceuticaldistributors.doctor.model.Doctor;
import com.wettasinghepharmaceuticaldistributors.doctor.repository.DoctorRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class DoctorService {

    private final DoctorRepository doctorRepository;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public DoctorService(DoctorRepository doctorRepository) {
        this.doctorRepository = doctorRepository;
    }

    // Register
    public DoctorResponseDTO registerDoctor(DoctorRegistrationDTO dto, String licenseFilePath) {
        doctorRepository.findByEmail(dto.getEmail()).ifPresent(d -> {
            throw new RuntimeException("Email already in use");
        });
        doctorRepository.findByLicenseNo(dto.getLicenseNo()).ifPresent(d -> {
            throw new RuntimeException("License number already in use");
        });

        Doctor doctor = new Doctor();
        doctor.setName(dto.getName());
        doctor.setEmail(dto.getEmail());
        doctor.setPassword(passwordEncoder.encode(dto.getPassword()));
        doctor.setLicenseNo(dto.getLicenseNo());
        doctor.setLicenseFilePath(licenseFilePath);
        doctor.setVerifyStatus(Doctor.VerifyStatus.PENDING);

        return toResponseDTO(doctorRepository.save(doctor));
    }

    // Login
    public boolean login(DoctorLoginDTO dto) {
        return doctorRepository.findByEmail(dto.getEmail())
                .filter(d -> d.getVerifyStatus() == Doctor.VerifyStatus.APPROVED)
                .map(d -> passwordEncoder.matches(dto.getPassword(), d.getPassword()))
                .orElse(false);
    }

    // CRUD
    public Optional<DoctorResponseDTO> getDoctorById(Long id) {
        return doctorRepository.findById(id).map(this::toResponseDTO);
    }

    public List<DoctorResponseDTO> getAllDoctors() {
        return doctorRepository.findAll().stream().map(this::toResponseDTO).collect(Collectors.toList());
    }

    public DoctorResponseDTO updateDoctor(Long id, DoctorRegistrationDTO dto, String licenseFilePath) {
        Doctor existing = doctorRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Doctor not found"));

        existing.setName(dto.getName());
        existing.setEmail(dto.getEmail());
        if (dto.getPassword() != null && !dto.getPassword().isBlank()) {
            existing.setPassword(passwordEncoder.encode(dto.getPassword()));
        }
        existing.setLicenseNo(dto.getLicenseNo());
        if (licenseFilePath != null) {
            existing.setLicenseFilePath(licenseFilePath);
        }
        return toResponseDTO(doctorRepository.save(existing));
    }

    public void deleteDoctor(Long id) {
        if (!doctorRepository.existsById(id)) throw new RuntimeException("Doctor not found");
        doctorRepository.deleteById(id);
    }

    // Admin approval
    public DoctorResponseDTO approveDoctor(Long id) {
        Doctor d = doctorRepository.findById(id).orElseThrow(() -> new RuntimeException("Doctor not found"));
        d.setVerifyStatus(Doctor.VerifyStatus.APPROVED);
        return toResponseDTO(doctorRepository.save(d));
    }

    public DoctorResponseDTO rejectDoctor(Long id) {
        Doctor d = doctorRepository.findById(id).orElseThrow(() -> new RuntimeException("Doctor not found"));
        d.setVerifyStatus(Doctor.VerifyStatus.REJECTED);
        return toResponseDTO(doctorRepository.save(d));
    }

    public List<DoctorResponseDTO> getPendingDoctors() {
        return doctorRepository.findAll().stream()
                .filter(d -> d.getVerifyStatus() == Doctor.VerifyStatus.PENDING)
                .map(this::toResponseDTO)
                .collect(Collectors.toList());
    }

    // Mapper
    private DoctorResponseDTO toResponseDTO(Doctor doctor) {
        DoctorResponseDTO dto = new DoctorResponseDTO();
        dto.setId(doctor.getId());
        dto.setName(doctor.getName());
        dto.setEmail(doctor.getEmail());
        dto.setLicenseNo(doctor.getLicenseNo());
        dto.setLicenseFilePath(doctor.getLicenseFilePath());
        dto.setVerifyStatus(doctor.getVerifyStatus().name());
        return dto;
    }
}
