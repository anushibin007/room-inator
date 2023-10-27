import Rooms from "../data/RoomsDB";

class RoomsService {
	getAllRooms = () => {
		return Rooms;
	};
}

export default new RoomsService();
