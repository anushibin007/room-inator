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

	getCountryNames = async () => {
		const allRooms = await this.getAllRooms();
		const uniqueCountries = [...new Set(allRooms.map((aRoom) => aRoom.c))];
		return uniqueCountries;
	};

	fetchRoomData = async () => {
		// Try to fetch from cache
		const cachedRooms = this.getCachedRooms();
		if (cachedRooms) {
			return cachedRooms;
		}

		// Do a fresh fetch if query is not valid
		const response = await fetch(dataJSON);
		const rooms = await response.json();
		this.setCachedData(rooms);
		return rooms;
	};

	getCachedRooms = () => {
		const cachedRooms = localStorage.getItem("rooms");
		if (cachedRooms) {
			return JSON.parse(cachedRooms);
		}
		return undefined;
	};

	setCachedData = (roomsData) => {
		localStorage.setItem("rooms", JSON.stringify(roomsData));
	};
}

export default new RoomsService();
