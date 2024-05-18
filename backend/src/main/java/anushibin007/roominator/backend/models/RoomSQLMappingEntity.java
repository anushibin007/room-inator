package anushibin007.roominator.backend.models;

import anushibin007.roominator.backend.dtos.RoomDetailsViewDTO;
import jakarta.persistence.*;

import java.util.List;

@SqlResultSetMapping(
        name = "RoomDetailsViewDTOMapping",
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
                        @ColumnResult(name = "directions", type = String[].class)
                }
        )
)
@Entity
public class RoomSQLMappingEntity {
    @Id
    private int dummyId;
    public RoomSQLMappingEntity(String roomId, String roomName, String buildingId, String buildingName, String locationId, String locationName, String countryId, String countryName ) {

    }
}
