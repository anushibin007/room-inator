package anushibin007.roominator.backend.repositories;

import anushibin007.roominator.backend.models.Building;
import anushibin007.roominator.backend.models.BuildingView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BuildingViewRepository extends JpaRepository<Building, String> {

    @Query("SELECT b.name AS name, b.id AS id, b.location.id AS locationId FROM Building b ORDER BY b.name")
    List<BuildingView> findAllBuildingViews();


    @Query("SELECT b.name AS name, b.id AS id, b.location.id AS locationId FROM Building b WHERE b.id= :id ORDER BY b.name")
    BuildingView findBuildingViewById(@Param("id") String id);

    @Query("SELECT b.id as id, b.name as name, b.location.id as locationId FROM Building b WHERE b.location.id= :locationId ORDER BY b.name")
    List<BuildingView> findBuildingViewsByLocationId(@Param("locationId") String locationId);
}
