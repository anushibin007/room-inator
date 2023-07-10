// Bootstrap
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import SearchBar from "./SearchBar";
import { Button, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";

function Header({ rooms, setRooms, darkMode, toggleDarkMode }) {
	return (
		<>
			<Navbar sticky="top" className={`app ${darkMode ? "darkModeCSS" : ""}`}>
				<Container>
					<Navbar.Brand href="https://hcjt.glpages.otxlab.net/room-inator/">
						<img alt="" src={logo} width="50" height="50"  style={{ marginRight: '10px' }}/>
						<span style={{fontSize: '35px'}}>Room-Inator</span>
					</Navbar.Brand>
					<Nav>
					<SearchBar rooms={rooms} setRooms={setRooms} />
					<Button variant="secondary" onClick={toggleDarkMode}>
						{darkMode ? (
							<span className="material-symbols-outlined">light_mode</span>
						) : (
							<span className="material-symbols-outlined">dark_mode</span>
						)}
					</Button>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}

export default Header;
