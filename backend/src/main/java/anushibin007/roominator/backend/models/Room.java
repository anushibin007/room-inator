package anushibin007.roominator.backend.models;

import anushibin007.roominator.backend.dtos.RoomDetailsViewDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@SqlResultSetMapping(
		name = "RoomDetailsViewDTOMapping",
		classes = @ConstructorResult(
				targetClass = RoomDetailsViewDTO.class,
				columns = {
						@ColumnResult(name = "roomId", type = String.class),
						@ColumnResult(name = "roomName", type = String.class),
						@ColumnResult(name = "floor", type = Integer.class),
						@ColumnResult(name = "capacity", type = Integer.class),
						@ColumnResult(name = "buildingId", type = String.class),
						@ColumnResult(name = "buildingName", type = String.class),
						@ColumnResult(name = "locationId", type = String.class),
						@ColumnResult(name = "locationName", type = String.class),
						@ColumnResult(name = "countryId", type = String.class),
						@ColumnResult(name = "countryName", type = String.class),
						@ColumnResult(name = "directions", type = String[].class),
						@ColumnResult(name = "stationery", type = String[].class),
						@ColumnResult(name = "images", type = String[].class)
				}
		)
)
@Entity
@Getter
@Setter
public class Room {
	@Id
	private String id;
	private String name;
	@ManyToOne(fetch = FetchType.EAGER)
	private Building building;

	private Integer floor;
	private Integer capacity;
	private List<String> directions;

	//TODO: nullable attributes, move
	private List<String> images;
	List<String> stationery;
}
