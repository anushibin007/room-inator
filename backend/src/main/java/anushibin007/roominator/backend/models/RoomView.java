package anushibin007.roominator.backend.models;

import java.util.List;

public interface RoomView {
    String getId();
    String getName();
    String getBuildingId();
    Integer getFloor();
    Integer getCapacity();
    List<String> getImages();
}
