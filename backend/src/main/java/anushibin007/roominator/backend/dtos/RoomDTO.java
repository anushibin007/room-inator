package anushibin007.roominator.backend.dtos;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class RoomDTO {
    private String id;
    private String name;
    private String building;
    private Integer floor;
    private Integer capacity;
    private List<String> images;
    private Boolean whiteboard;
    private Boolean projector;
    private List<String> directions;
}
