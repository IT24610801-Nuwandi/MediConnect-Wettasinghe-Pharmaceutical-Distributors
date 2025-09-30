package com.wettasinghepharmaceuticaldistributors.doctor.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class FileStorageService {

    private final String uploadDir = "uploads"; // base folder

    public String store(MultipartFile file, String subDir) {
        try {
            Path dirPath = Paths.get(uploadDir, subDir);
            Files.createDirectories(dirPath); // create folder if not exist

            String filePath = dirPath.resolve(file.getOriginalFilename()).toString();
            file.transferTo(new File(filePath));

            return filePath; // return saved path
        } catch (IOException e) {
            throw new RuntimeException("Failed to store file", e);
        }
    }
}
