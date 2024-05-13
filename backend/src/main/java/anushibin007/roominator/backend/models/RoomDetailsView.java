package anushibin007.roominator.backend.models;

import java.util.List;

public interface RoomDetailsView {
    String getId();
    String getName();
    Integer getFloor();
    String getBuildingId();
    Integer getCapacity();
    List<String> getDirections();

}
