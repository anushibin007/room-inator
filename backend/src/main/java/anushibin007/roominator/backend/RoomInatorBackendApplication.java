package anushibin007.roominator.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.core.mapping.ExposureConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import anushibin007.roominator.backend.model.Country;
import anushibin007.roominator.backend.model.Location;

@SpringBootApplication
public class RoomInatorBackendApplication implements RepositoryRestConfigurer {

	public static void main(String[] args) {
		SpringApplication.run(RoomInatorBackendApplication.class, args);
	}

	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
		// Expose the id parameter for each entity
		config.exposeIdsFor(Country.class);
		config.exposeIdsFor(Location.class);

		// Don't allow the POST method
		// REF: https://docs.spring.io/spring-data/rest/reference/customizing-sdr.html
		// TODO: Don't allow unwanted methods like DELETE, PUT, etc
		ExposureConfiguration expConfig = config.getExposureConfiguration();
		expConfig.withItemExposure((metadata, httpMethods) -> httpMethods.disable(HttpMethod.POST));
	}

}
