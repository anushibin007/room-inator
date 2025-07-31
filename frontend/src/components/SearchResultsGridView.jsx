// React
import React from "react";
// MUI
import Grid from "@mui/joy/Grid";
import RoomCard from "./customcomponent/RoomCard";

function SearchResultsGridView({ rooms }) {
	return (
		<>
			<Grid 
				container 
				id="search-results-wrapper" 
				marginTop={3} 
				xs={12}
				spacing={3}
				sx={{
					"& .MuiGrid-item": {
						display: "flex"
					}
				}}
			>
				{rooms?.map((room) => (
					<Grid
						key={room.id}
						xs={12}
						sm={6}
						md={4}
						lg={3}
						sx={{ display: "flex" }}
					>
						<RoomCard room={room} />
					</Grid>
				))}
			</Grid>
		</>
	);
}

export default SearchResultsGridView;
