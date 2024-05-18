package anushibin007.roominator.backend.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.ColumnResult;
import jakarta.persistence.ConstructorResult;
import jakarta.persistence.SqlResultSetMapping;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@SqlResultSetMapping(
        name = "RoomDetailsViewDTO",
        classes = @ConstructorResult(
                targetClass = RoomDetailsViewDTO.class,
                columns = {
                        @ColumnResult(name = "roomId", type = String.class),
                        @ColumnResult(name = "roomName", type = String.class),
                        @ColumnResult(name = "buildingId", type = String.class),
                        @ColumnResult(name = "buildingName", type = String.class),
                        @ColumnResult(name = "locationId", type = String.class),
                        @ColumnResult(name = "locationName", type = String.class),
                        @ColumnResult(name = "countryId", type = String.class),
                        @ColumnResult(name = "countryName", type = String.class),

                }
        )
)
@Getter
@Setter
@NoArgsConstructor
//@AllArgsConstructor
public class RoomDetailsViewDTO {
    String roomId;
    String roomName;
    String buildingId;
    String buildingName;
    String locationId;
    String locationName;
    String countryId;
    String countryName;
    List<String> directions;



    public RoomDetailsViewDTO(String roomId, String roomName, String buildingId, String buildingName, String locationId, String locationName, String countryId, String countryName, List<String> directions) {
        this.roomId = roomId;
        this.roomName = roomName;
        this.buildingId = buildingId;
        this.buildingName = buildingName;
        this.locationId = locationId;
        this.locationName = locationName;
        this.countryId = countryId;
        this.countryName = countryName;
        this.directions = new ArrayList<>();
        for(String direction: directions) {
            this.directions.add(direction);
        }
    }
}
