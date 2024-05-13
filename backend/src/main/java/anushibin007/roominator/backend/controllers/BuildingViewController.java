package anushibin007.roominator.backend.controllers;

import anushibin007.roominator.backend.models.BuildingView;
import anushibin007.roominator.backend.services.BuildingService;
import anushibin007.roominator.backend.services.BuildingViewService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public List<BuildingView> getBuildingViews() {
        return buildingViewService.getBuildingViews();
    }

    @GetMapping("/{id}")
    public BuildingView getBuildingViewById(@PathVariable String id) {
        return buildingViewService.getBuildingViewById(id);
    }

    @GetMapping(params = "location")
    public List<BuildingView> getBuildingsByLocationId(@RequestParam(name = "location") String locationId) {
        return buildingViewService.getBuildingsByLocationId(locationId);
    }

}
