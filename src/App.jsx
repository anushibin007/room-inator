// React
import React, { useEffect, useState } from "react";
// DB
import RoomsService from "./service/RoomsService";
// MUI
import { CssBaseline } from "@mui/joy";
import Grid from "@mui/joy/Grid";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
// Other internal Components
import QuickFilters from "./components/QuickFilters";
import Footer from "./components/Footer";
import SearchResults from "./components/SearchResults";
import Header from "./components/Header";
// Custom CSS
import "./stylesheets/customstyles.css";

function App() {
	const [rooms, setRooms] = useState([]);
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		initiateDefaultRooms();
	}, []);

	const initiateDefaultRooms = async () => {
		const allRooms = await RoomsService.getAllRooms();
		if (Array.isArray(allRooms)) {
			setRooms(allRooms);
		}
	};

	const theme = extendTheme({ cssVarPrefix: "dark" });

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};
	return (
		<>
			<CssVarsProvider
				theme={theme}
				modeStorageKey="demo_identify-system-mode"
				disableNestedContext
			>
				<CssBaseline />
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
			</CssVarsProvider>
		</>
	);
}

export default App;
