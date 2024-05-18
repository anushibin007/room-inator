package anushibin007.roominator.backend.dtos;

import jakarta.persistence.ColumnResult;
import jakarta.persistence.ConstructorResult;
import jakarta.persistence.SqlResultSetMapping;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
public class RoomDetailsViewDTO {
    String roomId;
    String roomName;
    Integer floor;
    Integer capacity;
    String buildingId;
    String buildingName;
    String locationId;
    String locationName;
    String countryId;
    String countryName;
    String[] directions;
    String[] stationery;
    String[] images;
}
