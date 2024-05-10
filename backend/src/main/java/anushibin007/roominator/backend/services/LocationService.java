package anushibin007.roominator.backend.services;

import anushibin007.roominator.backend.dtos.LocationDTO;
import anushibin007.roominator.backend.exceptions.EntityNotFoundException;
import anushibin007.roominator.backend.model.Location;
import anushibin007.roominator.backend.repo.LocationRepository;
import anushibin007.roominator.backend.utilities.DTOConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LocationService {
    LocationRepository locationRepository;

    @Autowired
    public LocationService(LocationRepository locationRepository) {
        this.locationRepository = locationRepository;
    }


    public ResponseEntity<List<LocationDTO>> getAllLocations() {
        List<Location> allLocations = locationRepository.findAll();
        List<LocationDTO> foundLocations = DTOConverter.convertLocationsToDTO(allLocations);
        return ResponseEntity.ok(foundLocations);
    }

    public ResponseEntity<LocationDTO> getLocationById(String id) throws EntityNotFoundException {
        Optional<Location> location = locationRepository.findById(id);
        if(location.isEmpty()) {
            throw new EntityNotFoundException("Location with id " + id + " not found");
        }
        LocationDTO foundLocation = DTOConverter.convertLocationToDTO(location.get());
        return ResponseEntity.ok(foundLocation);
    }
}
