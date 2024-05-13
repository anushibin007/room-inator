package anushibin007.roominator.backend.services;

import anushibin007.roominator.backend.dtos.BuildingDTO;
import anushibin007.roominator.backend.exceptions.EntityNotFoundException;
import anushibin007.roominator.backend.models.Building;
import anushibin007.roominator.backend.repositories.BuildingRepository;
import anushibin007.roominator.backend.utilities.DTOConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BuildingService {
    private BuildingRepository buildingRepository;

    @Autowired
    public BuildingService(BuildingRepository buildingRepository) {
        this.buildingRepository = buildingRepository;
    }

    public ResponseEntity<List<BuildingDTO>> getAllBuildings() {
        List<Building> allBuildings = buildingRepository.findAll();
        List<BuildingDTO> allBuildingsDTOs = DTOConverter.convertBuildingsToDTO(allBuildings);
        return ResponseEntity.ok(allBuildingsDTOs);
    }

    public ResponseEntity<BuildingDTO> getBuildingById(String id) throws EntityNotFoundException {
        Optional<Building> building = buildingRepository.findById(id);
        if(building.isEmpty()) {
            throw new EntityNotFoundException("Building with id " + id + " not found");
        }
        BuildingDTO foundBuilding = DTOConverter.convertBuildingToDTO(building.get());
        return ResponseEntity.ok(foundBuilding);
    }
}
