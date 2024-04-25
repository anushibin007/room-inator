// React
import React from "react";
// MUI
import { Grid } from "@mui/joy";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import BusinessIcon from "@mui/icons-material/Business";
import StairsIcon from "@mui/icons-material/Stairs";
import PeopleIcon from "@mui/icons-material/People";
import Typography from "@mui/joy/Typography";

import NonOverflowingTypography from "./customcomponent/NonOverflowingTypography";
import { addHashToCurrentPage } from "../utils/URLHelper";

function SearchResults({ rooms, darkMode }) {
	/**
	 * Function to show the Modal
	 * @param {*} aRoom The room whose detail needs to be shown in the Modal
	 * @param {*} e
	 */
	const openRoom = (aRoom, e) => {
		if (typeof aRoom === "object") {
			// There is a double redirect happening
			// here. The first one is not sending a
			// id. Rather, it is sending an object.
			// I don't know why it is happening
			// though. We are simply going to ignore
			// that call.
			return;
		}
		addHashToCurrentPage(`room/${aRoom}`);
	};

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
						onClick={() => {
							openRoom(room.id);
						}}
					>
						<Grid xs={12}>
							<Card
								variant="outlined"
								onClick={() => openRoom(room)}
								sx={{ height: "250px", div: { cursor: "pointer" } }}
							>
								<CardCover>
									<img src={`${room.i[0]}?random=${room.id}`} loading="lazy" />
								</CardCover>
								<CardCover
									sx={{
										background:
											"linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
									}}
								/>
								<CardContent sx={{ justifyContent: "flex-end" }}>
									<Grid container xs={12}>
										<Grid xs={12}>
											<NonOverflowingTypography
												level="title-lg"
												textColor="#fff"
												mb={1}
											>
												{room.n}
											</NonOverflowingTypography>
										</Grid>
										<Grid xs={6}>
											<NonOverflowingTypography
												startDecorator={<LocationOnRoundedIcon />}
												textColor="neutral.300"
												mb={1}
											>
												{room.l}
											</NonOverflowingTypography>
										</Grid>
										<Grid xs={6}>
											<NonOverflowingTypography
												startDecorator={<BusinessIcon />}
											>
												{room.b}
											</NonOverflowingTypography>
										</Grid>
										<Grid xs={6}>
											<NonOverflowingTypography
												startDecorator={<StairsIcon />}
											>
												{room.f}
											</NonOverflowingTypography>
										</Grid>
										<Grid xs={6}>
											<NonOverflowingTypography
												startDecorator={<PeopleIcon />}
												textColor="neutral.300"
												mb={1}
											>
												{room.s}
											</NonOverflowingTypography>
										</Grid>
									</Grid>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				))}
				{(!rooms || rooms.length <= 0) && (
					<Typography component="h2" id="modal-title" level="h4" fontWeight="lg" mb={3}>
						No rooms found for given query
					</Typography>
				)}
			</Grid>
		</>
	);
}

export default SearchResults;
