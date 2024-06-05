// React
import React from "react";
// MUI
import Grid from "@mui/joy/Grid";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import StairsIcon from "@mui/icons-material/Stairs";
import PeopleIcon from "@mui/icons-material/People";

import NonOverflowingTypography from "./customcomponent/NonOverflowingTypography";
import { addHashToCurrentPage, buildImageSrcUrl } from "../utils/URLHelper";
import Constants from "../utils/Constants";
import SkeletonCardCover from "./customcomponent/SkeletonCardCover";

function SearchResultsGridView({ rooms }) {
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
								{room.images && (
									<>
										<SkeletonCardCover
											imgSrc={buildImageSrcUrl(room.images[0])}
										/>
									</>
								)}
								{!room.images && (
									<>
										<CardCover>
											<img
												src={`${Constants.IMAGE_PLACEHOLDER_URL}`}
												loading="lazy"
											/>
										</CardCover>
									</>
								)}
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
												{room.name}
											</NonOverflowingTypography>
										</Grid>
										<Grid xs={6}>
											<NonOverflowingTypography
												startDecorator={<StairsIcon />}
											>
												Floor {room.floor}
											</NonOverflowingTypography>
										</Grid>
										<Grid xs={6}>
											<NonOverflowingTypography
												startDecorator={<PeopleIcon />}
												textColor="neutral.300"
												mb={1}
											>
												Capacity {room.capacity}
											</NonOverflowingTypography>
										</Grid>
									</Grid>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				))}
			</Grid>
		</>
	);
}

export default SearchResultsGridView;
