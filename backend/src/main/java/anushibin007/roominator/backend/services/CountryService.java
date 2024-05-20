package anushibin007.roominator.backend.services;

import anushibin007.roominator.backend.dtos.CountryDTO;
import anushibin007.roominator.backend.exceptions.EntityNotFoundException;
import anushibin007.roominator.backend.models.Country;
import anushibin007.roominator.backend.repositories.CountryRepository;
import anushibin007.roominator.backend.utilities.DTOConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CountryService {
    private CountryRepository countryRepository;

    @Autowired
    public CountryService(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    public ResponseEntity<List<CountryDTO>> getAllCountries() {
        List<Country> allCountries = countryRepository.findAll();
        List<CountryDTO> allCountriesDTOs = DTOConverter.convertCountriesToDTO(allCountries);
        return ResponseEntity.ok(allCountriesDTOs);
    }

    public ResponseEntity<CountryDTO> getCountryById(String id) throws EntityNotFoundException {
        Optional<Country> country = countryRepository.findById(id);
        if(country.isEmpty()) {
            throw new EntityNotFoundException("Country with id " + id + " not found");
        }
        CountryDTO foundCountry = DTOConverter.convertCountryToDTO(country.get());
        return ResponseEntity.ok(foundCountry);
    }
}
