// React
import React, { useEffect, useState } from "react";
// DB
import RoomsService from "../service/RoomsService";
// Internal components
import SearchResultsRoot from "./SearchResultsRoot";
import Header from "./Header";
// MUI
import Grid from "@mui/joy/Grid";
// toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";

function MainPage() {
	const [rooms, setRooms] = useState([]);
	const [darkMode, setDarkMode] = useState(false);
	const [viewMode, setViewMode] = useState("");

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	useEffect(() => {
		initiateDefaultRooms();
		loadFromPersistentStorage();
	}, []);

	useEffect(() => {
		if (viewMode && viewMode != "") {
			localStorage.setItem("viewMode", viewMode);
		}
	}, [viewMode]);

	/**
	 * Loads all the localstorage data into our state
	 */
	const loadFromPersistentStorage = () => {
		const localViewMode = localStorage.getItem("viewMode");
		if (localViewMode) {
			setViewMode(localViewMode);
		} else {
			setViewMode("grid");
		}
	};

	const initiateDefaultRooms = async () => {
		const allRooms = await RoomsService.getAllRooms();
		if (Array.isArray(allRooms)) {
			setRooms(allRooms);
		}
	};
	return (
		<>
			<Header
				rooms={rooms}
				setRooms={setRooms}
				darkMode={darkMode}
				toggleDarkMode={toggleDarkMode}
				viewMode={viewMode}
				setViewMode={setViewMode}
			/>
			<Grid container paddingX={3}>
				{
					//<QuickFilters rooms={rooms} setRooms={setRooms} />
				}
				<Grid xs={12}>
					<SearchResultsRoot rooms={rooms} darkMode={darkMode} viewMode={viewMode} />
				</Grid>
				<ToastContainer
					position="bottom-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
					transition:Bounce
				/>
			</Grid>
			<Footer />
		</>
	);
}

export default MainPage;
