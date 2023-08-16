// MUI
import Grid from "@mui/joy/Grid";

// Bootstrap
import SearchBar from "./SearchBar";
import { Typography } from "@mui/joy";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

function Header({ rooms, setRooms, darkMode, toggleDarkMode }) {
	return (
		<>
			<Grid container xs={12} alignItems="center" justifyContent="space-between" padding={2}>
				<Grid xs={9}>
					<Typography level="title-lg" startDecorator={<MeetingRoomIcon />}>
						Room-Inator
					</Typography>
				</Grid>
				<Grid xs={3}>
					<SearchBar rooms={rooms} setRooms={setRooms} />
				</Grid>
			</Grid>
		</>
	);
}

export default Header;
