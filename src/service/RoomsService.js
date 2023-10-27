const dataJSON = "./RoomsDB.json";

var Rooms = null;

class RoomsService {
	getAllRooms = async () => {
		if (!Rooms) {
			Rooms = await this.fetchRoomData();
		}
		return Rooms;
	};

	fetchRoomData = async () => {
		const response = await fetch(dataJSON);
		const rooms = await response.json();
		return rooms;
	};
}

export default new RoomsService();
