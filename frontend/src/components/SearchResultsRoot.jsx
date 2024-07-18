// React
import React, { useEffect, useState } from "react";

import SearchResultsGridView from "./SearchResultsGridView";
import SearchResultsListView from "./SearchResultsListView";
import Constants from "../utils/Constants";
import Container from "@mui/joy/Container";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import NavButtons from "./navbuttons/NavButtons";
import GenericLoading from "./GenericLoading";
import WarningIcon from "@mui/icons-material/Warning";
import ShareIcon from "@mui/icons-material/Share";
import Button from "@mui/joy/Button";
import QRModal from "./QRModal";

function SearchResultsRoot({ darkMode, viewMode, rooms, setRooms }) {
	const [errorState, setErrorState] = useState(undefined);
	const [buildingData, setBuildingData] = useState(undefined);
	const [qrModalOpen, setQrModalOpen] = useState(false);

	useEffect(() => {
		if (!buildingData && rooms && rooms[0]) {
			loadBuildingData(rooms[0].buildingId);
		}
	}, [rooms]);

	const loadBuildingData = async (aBuildingId) => {
		const response = await fetch(`${Constants.BACKEND_SERVER_ROOT}/buildings/${aBuildingId}`);
		const responseData = await response.json();
		setBuildingData(responseData);
	};

	return (
		<Container sx={{ marginTop: 2 }}>
			<>
				<Grid
					container
					direction="row"
					alignItems="center"
					justifyContent="space-between"
					xs={12}
				>
					<Grid container>
						<Grid mr={1}>
							<NavButtons hideBackButton={true} />
						</Grid>
						<Grid>
							<Typography level="title-md" mt={1}>
								Pick a room {buildingData && <>from {buildingData.name}</>}
							</Typography>
							<Typography level="body-xs">
								Total rooms: {`${rooms ? rooms.length : 0}`}
							</Typography>
						</Grid>
					</Grid>
					<Grid>
						<Button
							startDecorator={<ShareIcon />}
							variant="outlined"
							onClick={() => setQrModalOpen(true)}
						>
							Share
						</Button>
					</Grid>
				</Grid>
			</>
			{viewMode === "grid" && <SearchResultsGridView rooms={rooms} darkMode={darkMode} />}
			{viewMode === "list" && <SearchResultsListView rooms={rooms} darkMode={darkMode} />}
			{viewMode != "grid" && viewMode != "list" && (
				<p>Invalid view mode selected - [{viewMode}]</p>
			)}
			{!errorState && !rooms && (
				<>
					<GenericLoading />
				</>
			)}
			{!errorState && rooms && rooms.length <= 0 && (
				<Typography
					component="h2"
					level="h4"
					fontWeight="lg"
					mb={3}
					startDecorator={<WarningIcon />}
				>
					No rooms were found with the given name
				</Typography>
			)}
			<QRModal
				open={qrModalOpen}
				setOpen={setQrModalOpen}
				modalTitle={`Share building "${buildingData?.name}"`}
				qrData={document.location.href}
			/>
		</Container>
	);
}

export default SearchResultsRoot;
