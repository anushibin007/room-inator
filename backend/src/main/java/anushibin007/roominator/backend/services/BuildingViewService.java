package anushibin007.roominator.backend.services;

import anushibin007.roominator.backend.models.BuildingView;
import anushibin007.roominator.backend.repositories.BuildingViewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BuildingViewService {

    private BuildingViewRepository buildingViewRepository;

    @Autowired
    public BuildingViewService(BuildingViewRepository buildingViewRepository) {
        this.buildingViewRepository = buildingViewRepository;
    }
    public List<BuildingView> getBuildingViews() {
        return buildingViewRepository.findAllBuildingViews();
    }

    public BuildingView getBuildingViewById(String id) {
        return buildingViewRepository.findBuildingViewById(id);
    }

    public List<BuildingView> getBuildingsByLocationId(String locationId) {
        return buildingViewRepository.findBuildingViewsByLocationId(locationId);
    }
}
