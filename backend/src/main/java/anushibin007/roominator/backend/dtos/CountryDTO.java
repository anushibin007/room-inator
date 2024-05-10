package anushibin007.roominator.backend.dtos;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class CountryDTO {
    private String id;
    private String name;
    private List<String> locations;
}
