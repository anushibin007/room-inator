package anushibin007.roominator.backend.controllers;

import anushibin007.roominator.backend.dtos.RoomDetailsViewDTO;
import anushibin007.roominator.backend.models.RoomView;
import anushibin007.roominator.backend.services.RoomViewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rooms")
public class RoomViewController {
    private RoomViewService roomViewService;

    @Autowired
    public RoomViewController(RoomViewService roomViewService) {
        this.roomViewService = roomViewService;
    }

    @GetMapping
    public ResponseEntity<List<RoomView>> getRoomViews() {
        return ResponseEntity.ok(roomViewService.getRoomViews());
    }

    @GetMapping(params = "building_id")
    public ResponseEntity<List<RoomView>> getRoomsByBuildingId(@RequestParam(name = "building_id") String buildingId) {
        return ResponseEntity.ok(roomViewService.getRoomsByBuildingId(buildingId));
    }

    @GetMapping("/{id}")
    public ResponseEntity<RoomDetailsViewDTO> getRoomDetails (@PathVariable String id) {
        return new ResponseEntity<>(roomViewService.getRoomDetailsViewDTO(id), HttpStatus.OK);
    }

    @GetMapping(params = {"room_name", "building_id"})
    public ResponseEntity<List<RoomView>> getRoomDetailsByRoomName(@RequestParam(name = "building_id") String buildingId, @RequestParam(name = "room_name") String roomName) {
        return  new ResponseEntity<>(roomViewService.findRoomViewsByBuildingIdAndRoomName(buildingId, roomName), HttpStatus.OK);
    }
    
}
