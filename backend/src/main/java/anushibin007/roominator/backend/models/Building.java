package anushibin007.roominator.backend.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class Building {
	@Id
	private String id;

	@ManyToOne(fetch = FetchType.EAGER)
	private Location location;
	private String name;
	@OneToMany(mappedBy = "building", fetch = FetchType.LAZY)
	private List<Room> rooms;

}
