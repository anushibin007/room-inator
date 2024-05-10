package anushibin007.roominator.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RoomInatorBackendApplication  {

	public static void main(String[] args) {
		SpringApplication.run(RoomInatorBackendApplication.class, args);
	}

//	@Override
//	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
//		// Expose the id parameter for each entity
////		config.exposeIdsFor(Country.class);
////		config.exposeIdsFor(Location.class);
////		config.exposeIdsFor(Building.class);
////		config.exposeIdsFor(Room.class);
//
//		// Don't allow the POST method
//		// REF: https://docs.spring.io/spring-data/rest/reference/customizing-sdr.html
//		// TODO: Don't allow unwanted methods like DELETE, PUT, etc
////		ExposureConfiguration expConfig = config.getExposureConfiguration();
////		expConfig.withItemExposure((metadata, httpMethods) -> httpMethods.disable(HttpMethod.POST));
//	}

}
