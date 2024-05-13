package anushibin007.roominator.backend.repositories;

import anushibin007.roominator.backend.models.Building;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BuildingRepository extends CrudRepository<Building, String> {
    Optional<Building> findById(String name);
    List<Building> findAll();
}
