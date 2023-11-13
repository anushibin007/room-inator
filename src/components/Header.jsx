// MUI
import Grid from "@mui/joy/Grid";

// Bootstrap
import SearchBar from "./SearchBar";
import Constants from "../utils/Constants";
import { Typography, IconButton } from "@mui/joy";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useState } from "react";
import AdvancedSearch from "./AdvancedSearch";

function Header({ rooms, setRooms, darkMode, toggleDarkMode }) {
	const [advancedSeachOpen, setAdvancedSearchOpen] = useState(false);
	const toggleModal = () => setAdvancedSearchOpen(!advancedSeachOpen);

	return (
		<>
			<Grid container xs={12} alignItems="center" justifyContent="space-between" padding={2}>
				<Grid xs={8}>
					<a href={Constants.BASE_PATH}>
						<Typography level="title-lg" startDecorator={<MeetingRoomIcon />}>
							Room-Inator
						</Typography>
					</a>
				</Grid>
				<Grid xs={1}>
					<IconButton onClick={toggleModal}>
						<FilterAltIcon />
					</IconButton>
				</Grid>
				<Grid xs={3}>{<SearchBar rooms={rooms} setRooms={setRooms} />}</Grid>
			</Grid>
			<AdvancedSearch advancedSeachOpen={advancedSeachOpen} toggleModal={toggleModal} />
		</>
	);
}

export default Header;
