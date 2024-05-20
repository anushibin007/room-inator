package anushibin007.roominator.backend.controllers;

import anushibin007.roominator.backend.exceptions.EntityNotFoundException;
import anushibin007.roominator.backend.models.CountryView;
import anushibin007.roominator.backend.services.CountryViewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/countries")
public class CountryViewController {
    CountryViewService countryViewService;

    @Autowired
    public CountryViewController(CountryViewService countryViewService) {
        this.countryViewService = countryViewService;
    }

    @GetMapping
    public ResponseEntity<List<CountryView>> getAllCountriesList() {
        return countryViewService.getAllCountriesList();
    }

    @GetMapping("/{id}")
    public ResponseEntity<CountryView> getCountryById(@PathVariable String id) throws EntityNotFoundException {
       return countryViewService.getCountryById(id);
    }
}
