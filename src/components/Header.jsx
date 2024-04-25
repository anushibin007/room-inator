// MUI
import Grid from "@mui/joy/Grid";

// toast
import { toast } from "react-toastify";

// Bootstrap
import SearchBar from "./SearchBar";
import Constants from "../utils/Constants";
import { Typography, IconButton } from "@mui/joy";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useState } from "react";
import AdvancedSearch from "./AdvancedSearch";

import { goToUrl } from "../utils/URLHelper";

function Header({ rooms, setRooms, darkMode, toggleDarkMode }) {
	const [advancedSeachOpen, setAdvancedSearchOpen] = useState(false);
	const toggleAdvancedSearch = () => {
		// setAdvancedSearchOpen(!advancedSeachOpen)
		toast("👨‍🔬 Feature still under development");
	};

	return (
		<>
			<Grid container xs={12} alignItems="center" justifyContent="space-between" padding={2}>
				<Grid xs={8}>
					<Grid container xs={12}>
						<Grid>
							<Typography
								level="title-lg"
								startDecorator={<MeetingRoomIcon />}
								onClick={() => {
									goToUrl(Constants.BASE_PATH);
								}}
								sx={{ p: { cursor: "pointer" } }}
							>
								Room-Inator
							</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid xs={1}>
					<IconButton onClick={toggleAdvancedSearch} title="Advanced filters">
						<FilterAltIcon />
					</IconButton>
				</Grid>
				<Grid xs={3}>{<SearchBar rooms={rooms} setRooms={setRooms} />}</Grid>
			</Grid>
			<AdvancedSearch
				advancedSeachOpen={advancedSeachOpen}
				toggleModal={toggleAdvancedSearch}
			/>
		</>
	);
}

export default Header;
