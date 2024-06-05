import { useParams } from "react-router-dom";
import RoomDetails from "./RoomDetails";
import { useState, useEffect } from "react";
import Constants from "../utils/Constants";
function RoomDetailsRoute() {
	const { roomId } = useParams();
	const [room, setRoom] = useState(undefined);
	const [errorState, setErrorState] = useState(undefined);

	useEffect(() => {
		loadRoom();
	}, []);

	const loadRoom = async () => {
		try {
			const response = await fetch(`${Constants.BACKEND_SERVER_ROOT}/rooms/${roomId}`);
			const data = await response.json();
			setRoom(data);
		} catch (err) {
			console.error({ error: err });
			setErrorState({ error: err });
		}
	};

	return (
		<>
			<RoomDetails room={room} errorState={errorState} />
		</>
	);
}

export default RoomDetailsRoute;
