package anushibin007.roominator.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Entity(name = "countries")
@Getter
@Setter
@EqualsAndHashCode
public class Country {
	@Id
	private String id;
	private String name;
}
