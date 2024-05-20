// React
import React, { useEffect, useState } from "react";
// Internal components
import SearchResultsRoot from "./SearchResultsRoot";
import Header from "./Header";
// MUI
import Grid from "@mui/joy/Grid";
// toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import BaseCriteriaSelector from "./BaseCriteriaSelector";

function MainPage({ display }) {
	const [rooms, setRooms] = useState([]);
	const [darkMode, setDarkMode] = useState(false);
	const [viewMode, setViewMode] = useState("");

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	useEffect(() => {
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

	return (
		<>
			<Header
				rooms={rooms}
				setRooms={setRooms}
				darkMode={darkMode}
				toggleDarkMode={toggleDarkMode}
				viewMode={viewMode}
				setViewMode={setViewMode}
				simpleMode={
					// We don't need the search pane for the following items
					display === "countries" || display === "locations" || display === "buildings"
				}
			/>
			<Grid container paddingX={3}>
				<Grid xs={12}>
					{display === "countries" && <BaseCriteriaSelector criteria="Country" />}
					{display === "locations" && <BaseCriteriaSelector criteria="Location" />}
					{display === "buildings" && <BaseCriteriaSelector criteria="Building" />}
					{display === "rooms" && (
						<SearchResultsRoot
							rooms={rooms}
							darkMode={darkMode}
							dataType={"rooms"}
							viewMode={viewMode}
						/>
					)}
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
