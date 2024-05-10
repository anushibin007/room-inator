package anushibin007.roominator.backend.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Entity
@Getter
@Setter
public class Country {
	@Id
	private String id;
	private String name;

	@OneToMany(mappedBy = "country", fetch = FetchType.LAZY)
	@JsonManagedReference
	private List<Location> locations;

	@Override
	public String toString() {
		return "Country{" +
				"id='" + id + '\'' +
				", name='" + name + '\'' +
				'}';
	}

}
