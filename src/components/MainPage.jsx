// React
import React, { useEffect, useState } from "react";
// DB
import RoomsService from "../service/RoomsService";
// Internal components
import SearchResults from "./SearchResults";
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
