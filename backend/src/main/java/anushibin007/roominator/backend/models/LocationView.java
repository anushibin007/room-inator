package anushibin007.roominator.backend.models;

import org.springframework.beans.factory.annotation.Value;

public interface LocationView {
    String getName();
    String getId();
    // Using @Value for country_id with SpEL expression
    //@Value("#{target.country != null ? target.country.getId() : null}")
    String getCountryId();
}
