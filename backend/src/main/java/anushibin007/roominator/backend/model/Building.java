package anushibin007.roominator.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@EqualsAndHashCode
public class Building {
	@Id
	private String id;
	private String location_id;
	private String name;
}
