package anushibin007.roominator.backend.repositories;

import anushibin007.roominator.backend.models.Room;
import anushibin007.roominator.backend.models.RoomView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoomViewRepository extends JpaRepository<Room, String> {
    @Query("SELECT r.id as id, r.name as name, r.building.id as buildingId, r.floor as floor, r.capacity as capacity  FROM Room r ORDER BY r.floor, r.name")
    List<RoomView> findAllRoomViews();

    @Query("SELECT r.id as id, r.name as name, r.building.id as buildingId, r.floor as floor, r.capacity as capacity FROM Room r WHERE r.building.id= :building ORDER BY r.floor, r.name")
    List<RoomView> findRoomViewsByBuildingIdAndRoomName(@Param("building") String building);

    @Query("SELECT r.id as id, r.name as name, r.building.id as buildingId, r.floor as floor, r.capacity as capacity, r.images as images FROM Room r WHERE r.building.id= :building AND UPPER(r.name) like :roomName ORDER BY r.floor, r.name")
    List<RoomView> findRoomViewsByBuildingIdAndRoomName(@Param("building") String building, @Param("roomName") String roomName);

    @Query("SELECT r.id as id, r.name as name, r.building.id as buildingId, r.floor as floor, r.capacity as capacity FROM Room r WHERE r.building.id= :buildingId AND r.capacity= :seatingCapacity ORDER BY r.floor, r.name")
    List<RoomView> findRoomViewsByBuildingIdAndCapacity(@Param("buildingId") String buildingId, @Param("seatingCapacity") Integer seatingCapacity);
}
