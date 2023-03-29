package com.example.backend.Location;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequestMapping("api/locations")
public class LocationController {

    @Autowired
    private LocationRepository locationRepository;

    @GetMapping("api/locations")
    public List<Location> getAllLocations() {
        return locationRepository.findAll();
    }
}