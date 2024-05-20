package anushibin007.roominator.backend.services;

import anushibin007.roominator.backend.models.LocationView;
import anushibin007.roominator.backend.repositories.LocationViewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationViewService {
    private final LocationViewRepository locationViewRepository;

    @Autowired
    public LocationViewService(LocationViewRepository locationViewRepository) {
        this.locationViewRepository = locationViewRepository;
    }

    public ResponseEntity<List<LocationView>> getAllLocationsList() {
        List<LocationView> allLocationsList = locationViewRepository.findAllLocationViews();
        return ResponseEntity.ok(allLocationsList);
    }

    public ResponseEntity<LocationView> getLocationById(String id) {
        LocationView location = locationViewRepository.findLocationViewById(id);
        return ResponseEntity.ok(location);
    }

    public ResponseEntity<List<LocationView>> getLocationsByCountryID(String countryId) {
        List<LocationView> locations = locationViewRepository.findLocationViewByCountryId(countryId);
        return ResponseEntity.ok(locations);
    }
}
