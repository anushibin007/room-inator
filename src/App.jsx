// React
import React, { useState } from "react";
// DB
import Rooms from "./data/RoomsDB";
// MUI
import Grid from "@mui/joy/Grid";
// Other internal Components
import QuickFilters from "./components/QuickFilters";
import Footer from "./components/Footer";
import SearchResults from "./components/SearchResults";
import Header from "./components/Header";
// Custom CSS
import "./stylesheets/customstyles.css";
function App() {
	const [rooms, setRooms] = useState(Rooms);
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};
	return (
		<>
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
		</>
	);
}

export default App;
