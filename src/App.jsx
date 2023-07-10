// React
import React, { useState } from "react";
// DB
import Rooms from "./data/RoomsDB";
// Bootstrap
import Container from "react-bootstrap/Container";
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
			<Header rooms={rooms} setRooms={setRooms} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<Container>
				<QuickFilters rooms={rooms} setRooms={setRooms} />
				<SearchResults rooms={rooms} darkMode={darkMode}/>
				<Footer />
			</Container>
			
		</>
	);
}

export default App;
