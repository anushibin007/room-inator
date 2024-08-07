// React
import React, { useEffect, useState, lazy, Suspense } from "react";
// Internal components
const Buildings = lazy(() => import("./Buildings"));
const SearchResultsRoot = lazy(() => import("./SearchResultsRoot"));
import Header from "./Header";
// MUI
import Grid from "@mui/joy/Grid";
// toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import GenericLoading from "./GenericLoading";

function MainPage({ display }) {
	const [rooms, setRooms] = useState(undefined);
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
					{display === "buildings" && (
						<Suspense
							fallback={
								<>
									<GenericLoading
										text={"Loading the list of Buildings. Please wait."}
									/>
								</>
							}
						>
							<Buildings />
						</Suspense>
					)}
					{display === "rooms" && (
						// TODO: Add a proper loading spinner or something like that
						<Suspense
							fallback={
								<>
									<GenericLoading
										text={"Loading rooms in this building. Please wait."}
									/>
								</>
							}
						>
							<SearchResultsRoot
								rooms={rooms}
								setRooms={setRooms}
								darkMode={darkMode}
								dataType={"rooms"}
								viewMode={viewMode}
							/>
						</Suspense>
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
