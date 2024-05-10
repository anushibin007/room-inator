package anushibin007.roominator.backend.controllers;

import anushibin007.roominator.backend.dtos.RoomDTO;
import anushibin007.roominator.backend.exceptions.EntityNotFoundException;
import anushibin007.roominator.backend.services.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/rooms")
public class RoomController {

    RoomService roomService;
    @Autowired
    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }

    @GetMapping
    public ResponseEntity<List<RoomDTO>> getAllLocations() {
        return roomService.getAllRooms();
    }

    @GetMapping("/{id}")
    public ResponseEntity<RoomDTO> getLocationById(@PathVariable String id) throws EntityNotFoundException {
        return roomService.getRoomById(id);
    }

}
