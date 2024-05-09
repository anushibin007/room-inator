package anushibin007.roominator.backend.model;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@EqualsAndHashCode
public class Country {
	@Id
	private String id;
	private String name;
	@OneToMany(mappedBy = "country", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JsonBackReference
	private Set<Location> locations;
}
