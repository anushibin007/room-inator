// MUI
import Grid from "@mui/joy/Grid";

// Bootstrap
import SearchBar from "./SearchBar";
import Constants from "../utils/Constants";
import Typography from "@mui/joy/Typography";
import ButtonGroup from "@mui/joy/ButtonGroup";
import IconButton from "@mui/joy/IconButton";
import ListIcon from "@mui/icons-material/List";
import WindowIcon from "@mui/icons-material/Window";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

import { goToUrl } from "../utils/URLHelper";
import Spacer from "./Spacer";

function Header({ rooms, setRooms, darkMode, toggleDarkMode, simpleMode, viewMode, setViewMode }) {
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
				<Grid xs={4} md={3}>
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
							<Grid xs={8} md={9}>
								<Grid
									container
									direction="row"
									xs={12}
									justifyContent="flex-end"
									alignItems="center"
									paddingRight={2}
								>
									<Grid>
										<ButtonGroup aria-label="outlined primary button group">
											<IconButton
												variant={viewMode === "grid" ? `solid` : ""}
												onClick={setGridViewMode}
												size="sm"
											>
												<WindowIcon />
											</IconButton>
											<IconButton
												variant={viewMode === "list" ? `solid` : ""}
												onClick={setListViewMode}
												size="sm"
											>
												<ListIcon />
											</IconButton>
										</ButtonGroup>
									</Grid>
									<Grid xs={6} md={4} ml={1}>
										{<SearchBar rooms={rooms} setRooms={setRooms} />}
									</Grid>
								</Grid>
							</Grid>
						</>
					)
				}
			</Grid>
			<Spacer spacerForClass="header" />
		</>
	);
}

export default Header;
