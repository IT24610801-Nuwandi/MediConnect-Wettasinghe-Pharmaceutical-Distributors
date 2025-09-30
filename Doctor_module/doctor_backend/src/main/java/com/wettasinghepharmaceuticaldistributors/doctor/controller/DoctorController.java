package com.wettasinghepharmaceuticaldistributors.doctor.controller;

import com.wettasinghepharmaceuticaldistributors.doctor.dto.DoctorLoginDTO;
import com.wettasinghepharmaceuticaldistributors.doctor.dto.DoctorRegistrationDTO;
import com.wettasinghepharmaceuticaldistributors.doctor.dto.DoctorResponseDTO;
import com.wettasinghepharmaceuticaldistributors.doctor.service.DoctorService;
import com.wettasinghepharmaceuticaldistributors.doctor.service.FileStorageService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/doctors")
@CrossOrigin(origins = "http://localhost:5173")
public class DoctorController {

    private final DoctorService doctorService;
    private final FileStorageService fileStorageService;

    public DoctorController(DoctorService doctorService, FileStorageService fileStorageService) {
        this.doctorService = doctorService;
        this.fileStorageService = fileStorageService;
    }

    // ✅ Register with license upload
    @PostMapping(value = "/register", consumes = {"multipart/form-data"})
    public DoctorResponseDTO registerDoctor(
            @Valid @RequestPart("doctor") DoctorRegistrationDTO dto,
            @RequestPart("licenseFile") MultipartFile licenseFile) {
        String path = fileStorageService.store(licenseFile, "licenses");
        return doctorService.registerDoctor(dto, path);
    }

    // ✅ Login
    @PostMapping("/login")
    public String login(@Valid @RequestBody DoctorLoginDTO dto) {
        boolean ok = doctorService.login(dto);
        if (!ok) throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid credentials or not approved");
        return "Login successful";
    }

    // ✅ CRUD
    @GetMapping("/{id}")
    public DoctorResponseDTO getDoctorById(@PathVariable Long id) {
        return doctorService.getDoctorById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Doctor not found"));
    }

    @GetMapping
    public List<DoctorResponseDTO> getAll() { return doctorService.getAllDoctors(); }

    @PutMapping("/{id}")
    public DoctorResponseDTO updateDoctor(
            @PathVariable Long id,
            @Valid @RequestPart("doctor") DoctorRegistrationDTO dto,
            @RequestPart(value = "licenseFile", required = false) MultipartFile licenseFile) {
        String path = (licenseFile != null) ? fileStorageService.store(licenseFile, "licenses") : null;
        return doctorService.updateDoctor(id, dto, path);
    }

    @DeleteMapping("/{id}")
    public String deleteDoctor(@PathVariable Long id) {
        doctorService.deleteDoctor(id);
        return "Deleted";
    }

    // ✅ Admin endpoints
    @GetMapping("/pending")
    public List<DoctorResponseDTO> pending() { return doctorService.getPendingDoctors(); }

    @PutMapping("/{id}/approve")
    public DoctorResponseDTO approve(@PathVariable Long id) { return doctorService.approveDoctor(id); }

    @PutMapping("/{id}/reject")
    public DoctorResponseDTO reject(@PathVariable Long id) { return doctorService.rejectDoctor(id); }
}