import { useParams } from "react-router-dom";
import RoomDetails from "./RoomDetails";
import { useState, useEffect } from "react";
import RoomsService from "../service/RoomsService";
function RoomDetailsRoute() {
	const { roomName } = useParams();
	const [room, setRoom] = useState({});

	useEffect(() => {
		initiateDefaultRoom();
	}, []);

	const initiateDefaultRoom = async () => {
		const aRoom = await RoomsService.getFirstRoomById(roomName);
		setRoom(aRoom);
	};
	return (
		<>
			<RoomDetails room={room} />
		</>
	);
}

export default RoomDetailsRoute;
