package anushibin007.roominator.backend.services;

import anushibin007.roominator.backend.models.RoomView;
import anushibin007.roominator.backend.repositories.RoomViewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomViewService {
    private RoomViewRepository roomViewRepository;

    @Autowired
    public RoomViewService(RoomViewRepository roomViewRepository) {
        this.roomViewRepository = roomViewRepository;
    }

    public List<RoomView> getRoomViews() {
        return roomViewRepository.findAllRoomViews();
    }

    public RoomView getRoomViewById(String id) {
        return roomViewRepository.findRoomViewById(id);
    }

    public List<RoomView> getRoomsByBuildingId(String buildingId) {
        return roomViewRepository.findRoomViewsByBuildingId(buildingId);
    }
}
