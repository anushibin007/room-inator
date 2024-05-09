package anushibin007.roominator.backend.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import anushibin007.roominator.backend.model.Room;

@Repository
public interface RoomRepository extends CrudRepository<Room, String> {

}
