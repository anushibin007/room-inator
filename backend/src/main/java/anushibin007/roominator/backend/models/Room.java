package anushibin007.roominator.backend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

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
