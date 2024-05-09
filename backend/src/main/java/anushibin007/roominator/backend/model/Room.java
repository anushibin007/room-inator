package anushibin007.roominator.backend.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@EqualsAndHashCode
public class Room {
	@Id
	private String id;
	private String building_id;
	private String name;
	private Integer floor;
	private Integer seats;
	private List<String> images;
	private Boolean whiteboard;
	private Boolean projector;
	private List<String> directions;
}
