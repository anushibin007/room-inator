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
    @Query("SELECT r.id as id, r.name as name, r.building.id as buildingId, r.floor as floor, r.capacity as capacity  FROM Room r")
    List<RoomView> findAllRoomViews();

//    @Query("SELECT r.id as id, r.name as name, r.building.id as buildingId, r.floor as floor, r.capacity as capacity  FROM Room r WHERE r.id= :id")
//    RoomView findRoomViewById(@Param("id") String id);

    @Query("SELECT r.id as id, r.name as name, r.building.id as buildingId, r.floor as floor, r.capacity as capacity FROM Room r WHERE r.building.id= :building")
    List<RoomView> findRoomViewsByBuildingId(@Param("building") String building);
}
