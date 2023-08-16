// MUI
import Grid from "@mui/joy/Grid";

// Bootstrap
import SearchBar from "./SearchBar";
import { Typography } from "@mui/joy";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

function Header({ rooms, setRooms, darkMode, toggleDarkMode }) {
	return (
		<>
			<Grid
				container
				xs={12}
				alignItems="center"
				justifyContent="space-between"
				paddingTop={2}
			>
				<Grid container alignItems="center">
					<Grid>
						<Typography level="title-lg" startDecorator={<MeetingRoomIcon />}>
							Room-Inator
						</Typography>
					</Grid>
				</Grid>
				<Grid>
					<SearchBar rooms={rooms} setRooms={setRooms} />
				</Grid>
			</Grid>
		</>
	);
}

export default Header;
