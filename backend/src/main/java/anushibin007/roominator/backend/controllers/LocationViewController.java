package anushibin007.roominator.backend.controllers;

import anushibin007.roominator.backend.models.LocationView;
import anushibin007.roominator.backend.services.LocationViewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/locations")
public class LocationViewController {

    private LocationViewService locationViewService;

    @Autowired
    public LocationViewController(LocationViewService locationViewService) {
        this.locationViewService = locationViewService;
    }

    @GetMapping()
    public ResponseEntity<List<LocationView>> getAllLocations() {
        return locationViewService.getAllLocationsList();
    }

    @GetMapping("/{id}")
    public ResponseEntity<LocationView> getLocationById(@PathVariable String id) {
        return locationViewService.getLocationById(id);
    }

}
