package anushibin007.roominator.backend.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.FetchMode;

import java.util.List;

@Entity
@Getter
@Setter
public class Location {
	@Id
	private String id;

	private String name;

	@ManyToOne(fetch = FetchType.EAGER)
	private Country country;

	@OneToMany(mappedBy = "location", fetch = FetchType.LAZY)
	private List<Building> buildings;
}
