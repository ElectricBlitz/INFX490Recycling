package com.example.INFX490Recycling.Location;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("api/locations")
public class LocationController {

    @Autowired
    private LocationRepository locationRepository;

    @GetMapping("/locations")
    public List<Location> getAllLocations() {
        return locationRepository.findAll();
    }
}