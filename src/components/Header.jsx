// MUI
import Grid from "@mui/joy/Grid";

// Bootstrap
import SearchBar from "./SearchBar";
import logo from "../assets/logo.png";
import { Typography } from "@mui/joy";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

function Header({ rooms, setRooms, darkMode, toggleDarkMode }) {
	return (
		<>
			<Grid container alignItems="center" paddingX={5} paddingTop={2}>
				<Grid container alignItems="center" xs={8}>
					<Grid>
						<Typography level="h1" startDecorator={<MeetingRoomIcon />}>
							<a href="https://hcjt.glpages.otxlab.net/room-inator/">Room-Inator</a>
						</Typography>
					</Grid>
				</Grid>
				<Grid xs={4}>
					<SearchBar rooms={rooms} setRooms={setRooms} />
				</Grid>
			</Grid>
		</>
	);
}

export default Header;
