package anushibin007.roominator.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Entity
@Getter
@Setter
public class Building {
	@Id
	private String id;

	@ManyToOne(fetch = FetchType.LAZY)
	private Location location;
	private String name;
	@OneToMany(mappedBy = "building", fetch = FetchType.LAZY)
	private List<Room> rooms;

	@Override
	public String toString() {
		return "{" +
				"id:'" + id + '\'' +
				", location=" + location +
				", name='" + name + '\'' +
				'}';
	}

}
