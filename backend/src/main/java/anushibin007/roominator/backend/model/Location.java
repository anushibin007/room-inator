package anushibin007.roominator.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@EqualsAndHashCode
public class Location {
	@Id
	private String id;
	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "country_id", nullable = true)
	// TODO: In data rest, it is supposed to show the country as a JSON instead of
	// an URL. Check this one: http://localhost:8080/locations/hyd
	private Country country;
	private String name;
}
