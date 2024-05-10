package anushibin007.roominator.backend.repo;

import anushibin007.roominator.backend.model.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CountryRepository extends JpaRepository<Country, String> {
    List<Country> findAll();
    Optional<Country> findById(String s);
}
