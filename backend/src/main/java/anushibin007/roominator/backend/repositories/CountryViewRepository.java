package anushibin007.roominator.backend.repositories;

import anushibin007.roominator.backend.models.Country;
import anushibin007.roominator.backend.models.CountryView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface CountryViewRepository extends JpaRepository<Country, String> {
    @Query(value = "SELECT id, name FROM Country", nativeQuery = true)
    List<CountryView> findAllCountryViews();

    @Query(value = "SELECT id, name FROM Country WHERE id= :id", nativeQuery = true)
    CountryView findCountryViewById(@Param("id") String id);
}
