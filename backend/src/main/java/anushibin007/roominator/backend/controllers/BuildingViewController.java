package anushibin007.roominator.backend.controllers;

import anushibin007.roominator.backend.models.BuildingView;
import anushibin007.roominator.backend.services.BuildingService;
import anushibin007.roominator.backend.services.BuildingViewService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/buildings")
public class BuildingViewController {
    private BuildingViewService buildingViewService;

    @Autowired
    public BuildingViewController(BuildingViewService buildingViewService) {
        this.buildingViewService = buildingViewService;
    }

    @GetMapping
    public ResponseEntity<List<BuildingView>> getBuildingViews() {
        return ResponseEntity.ok(buildingViewService.getBuildingViews());
    }

    @GetMapping("/{id}")
    public ResponseEntity<BuildingView> getBuildingViewById(@PathVariable String id) {
        return ResponseEntity.ok(buildingViewService.getBuildingViewById(id));
    }

    @GetMapping(params = "location_id")
    public ResponseEntity<List<BuildingView>> getBuildingsByLocationId(@RequestParam(name = "location_id") String locationId) {
        return ResponseEntity.ok(buildingViewService.getBuildingsByLocationId(locationId));
    }

}
