package anushibin007.roominator.backend.repositories;

import anushibin007.roominator.backend.models.Location;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LocationRepository extends CrudRepository<Location, String> {
    List<Location> findAll();
    Optional<Location> findById(String s);

}
