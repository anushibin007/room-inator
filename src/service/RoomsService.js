const dataJSON = "./RoomsDB.json";

class RoomsService {
	Rooms = null;

	getAllRooms = async () => {
		if (this.Rooms == null) {
			this.Rooms = await this.fetchRoomData();
		}
		return this.Rooms;
	};

	getRoomById = async (roomId) => {
		if (!roomId) {
			return {};
		}
		const allRooms = await this.getAllRooms();
		const aRoom = allRooms.filter((aRoom) => {
			return aRoom.id === roomId;
		});
		return aRoom;
	};

	fetchRoomData = async () => {
		const response = await fetch(dataJSON);
		const rooms = await response.json();
		return rooms;
	};
}

export default new RoomsService();
