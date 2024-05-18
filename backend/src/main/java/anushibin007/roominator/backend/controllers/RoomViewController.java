package anushibin007.roominator.backend.controllers;

import anushibin007.roominator.backend.dtos.RoomDetailsViewDTO;
import anushibin007.roominator.backend.models.RoomView;
import anushibin007.roominator.backend.services.RoomViewService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.apache.coyote.Response;
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

    @GetMapping("/{id}")
    public ResponseEntity<RoomView> getRoomViewById(@PathVariable String id) {
        return ResponseEntity.ok(roomViewService.getRoomViewById(id));
    }

    @GetMapping(params = "building_id")
    public ResponseEntity<List<RoomView>> getRoomsByBuildingId(@RequestParam(name = "building_id") String buildingId) {
        return ResponseEntity.ok(roomViewService.getRoomsByBuildingId(buildingId));
    }

    @GetMapping("/roomdetails/{id}")
    public ResponseEntity<RoomDetailsViewDTO> getRoomDetails (@PathVariable String id) throws JsonProcessingException {
        return new ResponseEntity<>(roomViewService.getRoomDetailsViewDTO(id), HttpStatus.OK);
    }
    
}
