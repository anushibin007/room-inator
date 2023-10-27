// React
import React, { useEffect, useState } from "react";
// DB
import RoomsService from "../service/RoomsService";
// Internal components
import SearchResults from "./SearchResults";
import Header from "./Header";
// MUI
import Grid from "@mui/joy/Grid";

function MainPage() {
	const [rooms, setRooms] = useState([]);
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	useEffect(() => {
		initiateDefaultRooms();
	}, []);

	const initiateDefaultRooms = async () => {
		const allRooms = await RoomsService.getAllRooms();
		if (Array.isArray(allRooms)) {
			setRooms(allRooms);
		}
	};
	return (
		<Grid container paddingX={3}>
			<Grid xs={12}>
				<Header
					rooms={rooms}
					setRooms={setRooms}
					darkMode={darkMode}
					toggleDarkMode={toggleDarkMode}
				/>
			</Grid>
			{
				//<QuickFilters rooms={rooms} setRooms={setRooms} />
			}
			<Grid xs={12}>
				<SearchResults rooms={rooms} darkMode={darkMode} />
			</Grid>
			{
				//<Footer />
			}
		</Grid>
	);
}

export default MainPage;
