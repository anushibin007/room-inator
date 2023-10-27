const dataJSON = "./RoomsDB.json";

class RoomsService {
	Rooms = null;

	getAllRooms = async () => {
		if (this.Rooms == null) {
			this.Rooms = await this.fetchRoomData();
		}
		return this.Rooms;
	};

	fetchRoomData = async () => {
		const response = await fetch(dataJSON);
		const rooms = await response.json();
		return rooms;
	};
}

export default new RoomsService();
