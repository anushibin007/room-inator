package anushibin007.roominator.backend.controllers;

import anushibin007.roominator.backend.dtos.BuildingDTO;
import anushibin007.roominator.backend.exceptions.EntityNotFoundException;
import anushibin007.roominator.backend.services.BuildingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/buildings-details")
public class BuildingController {

    BuildingService buildingService;

    @Autowired
    public BuildingController(BuildingService buildingService) {
        this.buildingService = buildingService;
    }

    @GetMapping
    public ResponseEntity<List<BuildingDTO>> getAllLocations() {
        return buildingService.getAllBuildings();
    }

    @GetMapping("/{id}")
    public ResponseEntity<BuildingDTO> getLocationById(@PathVariable String id) throws EntityNotFoundException {
        return buildingService.getBuildingById(id);
    }

}
