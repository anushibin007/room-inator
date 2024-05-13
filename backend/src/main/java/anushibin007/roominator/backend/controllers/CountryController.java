package anushibin007.roominator.backend.controllers;

import anushibin007.roominator.backend.dtos.CountryDTO;
import anushibin007.roominator.backend.exceptions.EntityNotFoundException;
import anushibin007.roominator.backend.services.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/countries-details")
public class CountryController {
    CountryService countryService;

    @Autowired
    public CountryController(CountryService countryService) {
        this.countryService = countryService;
    }

    @GetMapping()
    public ResponseEntity<List<CountryDTO>> getAllCountries() {
        return countryService.getAllCountries();
    }

    @GetMapping("/{id}")
    public ResponseEntity<CountryDTO> getCountryById(@PathVariable String id) throws EntityNotFoundException {
       return countryService.getCountryById(id);
    }

}
