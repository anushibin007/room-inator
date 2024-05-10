package anushibin007.roominator.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Entity
@Getter
@Setter
public class Location {
	@Id
	private String id;

	private String name;

	@ManyToOne
	private Country country;

	@OneToMany(mappedBy = "location", fetch = FetchType.LAZY)
	private List<Building> buildings;

	@Override
	public String toString() {
		return "Location{" +
				"id='" + id + '\'' +
				", name='" + name + '\'' +
				", country=" + country +
				'}';
	}
}
