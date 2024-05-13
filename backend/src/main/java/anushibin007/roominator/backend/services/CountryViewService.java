package anushibin007.roominator.backend.services;

import anushibin007.roominator.backend.models.CountryView;
import anushibin007.roominator.backend.repositories.CountryViewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CountryViewService {

    private CountryViewRepository countryViewRepository;

    @Autowired
    public CountryViewService(CountryViewRepository countryViewRepository) {
        this.countryViewRepository = countryViewRepository;
    }

    public ResponseEntity<List<CountryView>> getAllCountriesList() {
        List<CountryView> allCountriesList = countryViewRepository.findAllCountryViews();
        return ResponseEntity.ok(allCountriesList);
    }

    public ResponseEntity<CountryView> getCountryById(String id) {
        CountryView country = countryViewRepository.findCountryViewById(id);
        return ResponseEntity.ok(country);
    }
}
