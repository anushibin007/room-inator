package anushibin007.roominator.backend.utilities;

import anushibin007.roominator.backend.dtos.BuildingDTO;
import anushibin007.roominator.backend.dtos.CountryDTO;
import anushibin007.roominator.backend.dtos.LocationDTO;
import anushibin007.roominator.backend.dtos.RoomDTO;
import anushibin007.roominator.backend.model.Building;
import anushibin007.roominator.backend.model.Country;
import anushibin007.roominator.backend.model.Location;
import anushibin007.roominator.backend.model.Room;

import java.util.ArrayList;
import java.util.List;

public class DTOConverter {
    public static CountryDTO convertCountryToDTO(Country country) {
        CountryDTO countryDTO = new CountryDTO();
        countryDTO.setName(country.getName());
        countryDTO.setId(country.getId());
        List<String> locations = new ArrayList<>(country.getLocations().size());
        for(Location location: country.getLocations()) {
            locations.add(location.toString());
        }
        countryDTO.setLocations(locations);
        return countryDTO;
    }

    public static List<CountryDTO> convertCountriesToDTO(List<Country> countries) {
        List<CountryDTO> countryDTOs = new ArrayList<>(countries.size());
        for(Country country: countries) {
            countryDTOs.add(convertCountryToDTO(country));
        }
        return countryDTOs;
    }

    public static LocationDTO convertLocationToDTO(Location location) {
        LocationDTO locationDTO = new LocationDTO();
        locationDTO.setId(location.getId());
        locationDTO.setName(location.getName());
        locationDTO.setCountry(convertCountryToDTO(location.getCountry()));
        List<String> buildings = new ArrayList<>(location.getBuildings().size());
        for(Building building: location.getBuildings()) {
            buildings.add(building.toString());
        }
        locationDTO.setBuildings(buildings);
        return locationDTO;
    }

    public static List<LocationDTO> convertLocationsToDTO(List<Location> locations) {
        List<LocationDTO> locationDTOs = new ArrayList<>(locations.size());
        for(Location location: locations) {
            locationDTOs.add(convertLocationToDTO(location));
        }
        return locationDTOs;
    }

    public static RoomDTO convertRoomToDTO (Room room) {
        RoomDTO roomDTO = new RoomDTO();
        roomDTO.setId(room.getId());
        roomDTO.setName(room.getName());
        roomDTO.setBuilding(room.getBuilding().toString());
        roomDTO.setFloor(room.getFloor());
        roomDTO.setCapacity(room.getCapacity());
        roomDTO.setDirections(room.getDirections());
        return roomDTO;
    }

    public static List<RoomDTO> convertRoomsToDTO (List<Room> rooms) {
        List<RoomDTO> roomDTOs = new ArrayList<>(rooms.size());
        for(Room room: rooms) {
            roomDTOs.add(convertRoomToDTO(room));
        }
        return roomDTOs;
    }

    public static BuildingDTO convertBuildingToDTO (Building building) {
        BuildingDTO buildingDTO = new BuildingDTO();
        buildingDTO.setId(building.getId());
        buildingDTO.setName(building.getName());
        buildingDTO.setLocation(building.getLocation().toString());
        buildingDTO.setRooms(convertRoomsToDTO(building.getRooms()));
        return buildingDTO;
    }

    public static List<BuildingDTO> convertBuildingsToDTO (List<Building> buildings) {
        List<BuildingDTO> buildingDTOs = new ArrayList<>(buildings.size());
        for(Building building: buildings) {
            buildingDTOs.add(convertBuildingToDTO(building));
        }
        return buildingDTOs;
    }

}
