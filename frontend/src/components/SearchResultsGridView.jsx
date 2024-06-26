// React
import React from "react";
// MUI
import Grid from "@mui/joy/Grid";
import RoomCard from "./customcomponent/RoomCard";

function SearchResultsGridView({ rooms }) {
	return (
		<>
			<Grid container id="search-results-wrapper" marginTop={1} xs={12}>
				{rooms?.map((room) => (
					<Grid
						key={room.id}
						container
						alignItems="center"
						justifyContent="space-evenly"
						padding={2}
						xs={12}
						md={6}
						lg={4}
					>
						<Grid xs={12}>
							<RoomCard room={room} />
						</Grid>
					</Grid>
				))}
			</Grid>
		</>
	);
}

export default SearchResultsGridView;
