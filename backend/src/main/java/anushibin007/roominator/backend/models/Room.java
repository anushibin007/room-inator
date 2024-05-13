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
	@ManyToOne(fetch = FetchType.LAZY)
	private Building building;

	private Integer floor;
	private Integer capacity;
	private List<String> directions;

	//TODO: nullable attributes, move
	private List<String> images;
	private Boolean whiteboard;
	private Boolean projector;

	@Override
	public String toString() {
		return "{" +
				"id='" + id + '\'' +
				", name='" + name + '\'' +
				", building=" + building +
				", floor=" + floor +
				", capacity=" + capacity +
				", directions=" + directions +
				'}';
	}

}
