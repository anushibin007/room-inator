import Constants from "../utils/Constants";

const dataJSON = `${Constants.BASE_PATH}RoomsDB.json?cacheKey=${Constants.BUILD_NUMBER}`;
//TODO: Delete this class later
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
		this.setCachedRooms(JSON.stringify(rooms));
		return rooms;
	};

	getCachedRooms = () => {
		this.validateCache();
		const cachedRooms = localStorage.getItem("rooms");
		if (cachedRooms) {
			return JSON.parse(cachedRooms);
		}
		return undefined;
	};

	setCachedRooms = (roomsData) => {
		localStorage.setItem("rooms", roomsData);
	};

	validateCache = () => {
		// Obtain the cached cacheKey
		const cachedCacheKey = localStorage.getItem("cacheKey");

		// Check if the cached cacheKey
		// matches with the one that the
		// server provides
		if (cachedCacheKey != Constants.BUILD_NUMBER) {
			console.log(
				"Cache key didn't match. Invalidating cache",
				{ cachedCacheKey },
				{ CACHE_KEY: Constants.BUILD_NUMBER }
			);
			localStorage.removeItem("rooms");
			localStorage.setItem("cacheKey", Constants.BUILD_NUMBER);
		}

		// If we are running a local build,
		// always invalidate the cache
		if (cachedCacheKey === "local-build") {
			console.log(
				"Cache key is 'local-build'. So, invalidating cache.",
				{ cachedCacheKey },
				{ CACHE_KEY: Constants.BUILD_NUMBER }
			);
			localStorage.removeItem("rooms");
			localStorage.setItem("cacheKey", Constants.BUILD_NUMBER);
		}
	};
}

export default new RoomsService();
