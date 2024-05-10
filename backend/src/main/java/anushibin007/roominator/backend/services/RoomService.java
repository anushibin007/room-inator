package anushibin007.roominator.backend.services;

import anushibin007.roominator.backend.dtos.RoomDTO;
import anushibin007.roominator.backend.exceptions.EntityNotFoundException;
import anushibin007.roominator.backend.model.Room;
import anushibin007.roominator.backend.repo.RoomRepository;
import anushibin007.roominator.backend.utilities.DTOConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoomService {
    private RoomRepository roomRepository;

    @Autowired
    public RoomService(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    public ResponseEntity<List<RoomDTO>> getAllRooms() {
        List<Room> allRooms = roomRepository.findAll();
        List<RoomDTO> allRoomsDTOs = DTOConverter.convertRoomsToDTO(allRooms);
        return ResponseEntity.ok(allRoomsDTOs);
    }

    public ResponseEntity<RoomDTO> getRoomById(String id) throws EntityNotFoundException {
        Optional<Room> room = roomRepository.findById(id);
        if(room.isEmpty()) {
            throw new EntityNotFoundException("Country with id " + id + " not found");
        }
        RoomDTO foundRoom = DTOConverter.convertRoomToDTO(room.get());
        return ResponseEntity.ok(foundRoom);
    }
}
