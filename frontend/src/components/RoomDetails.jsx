// MUI
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Grid from "@mui/joy/Grid";
import Link from "@mui/joy/Link";
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";
import React, { useEffect } from "react";
import Constants from "../utils/Constants";
import NavButtons from "./navbuttons/NavButtons";
import { buildImageSrcUrl } from "../utils/URLHelper";
import GLightbox from "glightbox";
import GenericLoading from "./GenericLoading";
import CustomHighlightedText from "./customcomponent/CustomHighlightedText";

function RoomDetails({ room, errorState }) {
	useEffect(() => {
		// Update the Web Page's title
		// whenever the room's state updates
		updatePageTitle();
		// Trigger GLightbox initialization
		GLightbox();
	}, [room]);

	const updatePageTitle = () => {
		if (room && Object.keys(room).length > 0) {
			document.title = `${room.roomName} - room-inator`;
		}
	};
	return (
		<>
			{!errorState && !room && (
				<>
					<GenericLoading />
				</>
			)}
			{!errorState && room && Object.keys(room).length > 0 && (
				<>
					{
						// TODO: Hide the below Grid with breadcrumbs when no rooms are found
					}
					<Grid container xs={12}>
						<Grid container xs={12} sx={{ marginTop: 1, marginBottom: 1 }}>
							<Grid>
								<NavButtons href={`#building/${room.buildingId}`} />
							</Grid>
							<Grid xs={10}>
								<Breadcrumbs aria-label="breadcrumb">
									<Link underline="hover" href={Constants.BASE_PATH}>
										Home
									</Link>
									<Link underline="hover" href={`#country/${room.countryId}`}>
										{room.countryName}
									</Link>
									<Link underline="hover" href={`#location/${room.locationId}`}>
										{room.locationName}
									</Link>
									<Link underline="hover" href={`#building/${room.buildingId}`}>
										{room.buildingName}
									</Link>
									<Typography color="text.primary">{room.roomName}</Typography>
								</Breadcrumbs>
							</Grid>
						</Grid>
						{room.images && (
							<Grid container xs={12} md={6}>
								{/*room.i.map((anImageSrc, index) => (
									<Grid key={index} xs={12}>
										<img src={`${anImageSrc}?random=${index}`} />
									</Grid>
								))*/}
								<Grid
									container
									xs={12}
									sx={{ padding: 3 }}
									alignItems="center"
									justifyContent="center"
								>
									<Grid>
										{
											// TODO: Support image array
										}
										<a
											href={`${buildImageSrcUrl(room.images[0])}`}
											className="glightbox"
										>
											<img
												src={`${buildImageSrcUrl(room.images[0])}`}
												style={{ maxWidth: "100%" }}
											/>
										</a>
									</Grid>
								</Grid>
							</Grid>
						)}
						<Grid container xs={12} md={room.images ? 6 : 12} alignItems="center">
							<Grid xs={12} sx={{ padding: 3 }}>
								<Table>
									<tbody>
										{room.floor && (
											<tr>
												<td>
													<Typography level="body-lg">
														Floor number
													</Typography>
												</td>
												<td>
													<Typography level="body-md">
														{room.floor}
													</Typography>
												</td>
											</tr>
										)}
										{room.capacity && (
											<tr>
												<td>
													<Typography level="body-lg">
														Seating capacity
													</Typography>
												</td>
												<td>
													<Typography level="body-md">
														{room.capacity}
													</Typography>
												</td>
											</tr>
										)}
										{room.stationery?.map((aStationery, index) => (
											<React.Fragment key={index}>
												<tr>
													<td>
														<Typography level="body-lg">
															{aStationery}
														</Typography>
													</td>
													<td>
														<Typography level="body-md">✅</Typography>
													</td>
												</tr>
											</React.Fragment>
										))}
										{room.directions && (
											<>
												<tr>
													<td
														colSpan={2}
														style={{
															borderBottom: "none",
														}}
													>
														<Typography level="body-lg">
															Directions to the room
														</Typography>
													</td>
												</tr>
												<tr>
													<td colSpan={2}>
														<ol>
															{room.directions.map(
																(direction, index) => (
																	<React.Fragment key={index}>
																		<li>
																			<Typography level="body-md">
																				<CustomHighlightedText
																					text={direction}
																				/>
																			</Typography>
																		</li>
																	</React.Fragment>
																)
															)}
														</ol>
													</td>
												</tr>
											</>
										)}
									</tbody>
								</Table>
							</Grid>
						</Grid>
					</Grid>
				</>
			)}
		</>
	);
}

export default RoomDetails;
