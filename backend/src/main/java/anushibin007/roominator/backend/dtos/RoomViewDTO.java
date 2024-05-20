package anushibin007.roominator.backend.dtos;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class RoomViewDTO {
    private String id;
    private String name;
    private CountryViewDTO country;
    private LocationViewDTO location;
    private BuildingViewDTO building;
    private Integer floor;
    private Integer capacity;
    private List<String> directions;

}
