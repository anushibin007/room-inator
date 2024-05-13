package anushibin007.roominator.backend.repositories;

import anushibin007.roominator.backend.models.Location;
import anushibin007.roominator.backend.models.LocationView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LocationViewRepository extends JpaRepository<Location, String> {
    @Query("SELECT  l.name AS name, l.id AS id, l.country.id AS countryId FROM Location l")
    public List<LocationView> findAllLocationViews();

    @Query("SELECT  l.name AS name, l.id AS id, l.country.id AS countryId FROM Location l WHERE l.id= :id")
    LocationView findLocationViewById(@Param("id") String id);
}
