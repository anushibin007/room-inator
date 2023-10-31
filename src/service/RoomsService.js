import Constants from "../utils/Constants";

const dataJSON = `${Constants.BASE_PATH}RoomsDB.json`;

class RoomsService {
	Rooms = null;

	getAllRooms = async () => {
		if (this.Rooms == null) {
			this.Rooms = await this.fetchRoomData();
		}
		return this.Rooms;
	};

	getFirstRoomById = async (roomId) => {
		const filteredRooms = await this.getRoomsById(roomId);
		return filteredRooms[0];
	};

	getRoomsById = async (roomId) => {
		if (!roomId) {
			return [];
		}
		const allRooms = await this.getAllRooms();
		const filteredRooms = allRooms.filter((aRoom) => {
			return aRoom.id == roomId;
		});
		console.log({ filteredRooms });
		if (!filteredRooms) {
			return [];
		}
		return filteredRooms;
	};

	fetchRoomData = async () => {
		const response = await fetch(dataJSON);
		const rooms = await response.json();
		return rooms;
	};
}

export default new RoomsService();
