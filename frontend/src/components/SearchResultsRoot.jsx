// React
import React, { useEffect, useState } from "react";

import SearchResultsGridView from "./SearchResultsGridView";
import SearchResultsListView from "./SearchResultsListView";
import Constants from "../utils/Constants";
import { useParams } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/joy";
import NavButtons from "./navbuttons/NavButtons";

function SearchResultsRoot({ darkMode, viewMode, rooms }) {
	const [buildingData, setBuildingData] = useState(undefined);

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
			{rooms && rooms.length > 0 && (
				<>
					<Grid container xs={12}>
						<Grid mr={1}>
							<NavButtons />
						</Grid>
						<Grid>
							<Typography level="title-md" mt={1}>
								Pick a room {buildingData && <>from {buildingData.name}</>}
							</Typography>
							<Typography level="body-xs">Total rooms: {rooms.length}</Typography>
						</Grid>
					</Grid>
				</>
			)}
			{viewMode === "grid" && <SearchResultsGridView rooms={rooms} darkMode={darkMode} />}
			{viewMode === "list" && <SearchResultsListView rooms={rooms} darkMode={darkMode} />}
			{viewMode != "grid" && viewMode != "list" && (
				<p>Invalid view mode selected - [{viewMode}]</p>
			)}
			{(!rooms || rooms.length <= 0) && (
				<Typography component="h2" level="h4" fontWeight="lg">
					Sorry, no rooms were found for the given query.
				</Typography>
			)}
		</Container>
	);
}

export default SearchResultsRoot;
