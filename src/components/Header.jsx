// MUI
import Grid from "@mui/joy/Grid";

// toast
import { toast } from "react-toastify";

// Bootstrap
import SearchBar from "./SearchBar";
import Constants from "../utils/Constants";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import IconButton from "@mui/joy/IconButton";
import ListIcon from "@mui/icons-material/List";
import WindowIcon from "@mui/icons-material/Window";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useState } from "react";
import AdvancedSearch from "./AdvancedSearch";

import { goToUrl } from "../utils/URLHelper";
import Spacer from "./Spacer";

function Header({ rooms, setRooms, darkMode, toggleDarkMode, simpleMode, viewMode, setViewMode }) {
	const [advancedSeachOpen, setAdvancedSearchOpen] = useState(false);
	const toggleAdvancedSearch = () => {
		// setAdvancedSearchOpen(!advancedSeachOpen)
		toast("👨‍🔬 Feature still under development");
	};

	const setGridViewMode = () => {
		setViewMode("grid");
	};

	const setListViewMode = () => {
		setViewMode("list");
	};

	return (
		<>
			<Grid
				container
				xs={12}
				alignItems="center"
				justifyContent="space-between"
				padding={2}
				className="header"
			>
				<Grid xs={7}>
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
				{
					/* We don't need the search functionality when Simple Mode is turned ON */
					!simpleMode && (
						<>
							<Grid xs={2}>
								<Grid
									container
									direction="row"
									xs={12}
									justifyContent="center"
									alignItems="center"
								>
									<Grid>
										<IconButton
											onClick={toggleAdvancedSearch}
											title="Advanced filters"
										>
											<FilterAltIcon />
										</IconButton>
									</Grid>
									<Grid>
										<ButtonGroup aria-label="outlined primary button group">
											<IconButton
												variant={viewMode === "grid" ? `solid` : ""}
												onClick={setGridViewMode}
											>
												<WindowIcon />
											</IconButton>
											<IconButton
												variant={viewMode === "list" ? `solid` : ""}
												onClick={setListViewMode}
											>
												<ListIcon />
											</IconButton>
										</ButtonGroup>
									</Grid>
								</Grid>
							</Grid>
							<Grid xs={3}>{<SearchBar rooms={rooms} setRooms={setRooms} />}</Grid>
						</>
					)
				}
			</Grid>
			<AdvancedSearch
				advancedSeachOpen={advancedSeachOpen}
				toggleModal={toggleAdvancedSearch}
			/>
			<Spacer spacerForClass="header" />
		</>
	);
}

export default Header;
