// MUI
import { Container, Grid, Table, Typography } from "@mui/joy";
import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

function RoomDetails({ room }) {
	useEffect(() => {
		// Update the Web Page's title
		// whenever the room's state updates
		updatePageTitle();
	}, [room]);

	const updatePageTitle = () => {
		if (room && Object.keys(room).length > 0) {
			document.title = `${room.name} - room-inator`;
		}
	};
	return (
		<>
			<Header simpleMode={true} />
			<Container>
				{room && Object.keys(room).length > 0 && (
					<>
						<Grid container xs={12}>
							<Grid container xs={12} sx={{ marginTop: 1, marginBottom: 1 }}>
								<Grid xs={12}>
									<Typography
										component="h2"
										id="modal-title"
										level="h4"
										fontWeight="lg"
									>
										{room.name}
									</Typography>
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
											<img
												src={`${room.images ? room.images[0] : ""}`}
												style={{ maxWidth: "100%" }}
											/>
										</Grid>
									</Grid>
								</Grid>
							)}
							<Grid container xs={12} md={room.images ? 6 : 12} alignItems="center">
								<Grid xs={12} sx={{ padding: 3 }}>
									<Table>
										<tbody>
											{room.country && (
												<tr>
													<td>
														<Typography level="body-lg">
															Country
														</Typography>
													</td>
													<td>
														<Typography level="body-md">
															{room.country}
														</Typography>
													</td>
												</tr>
											)}
											{room.location && (
												<tr>
													<td>
														<Typography level="body-lg">
															Location
														</Typography>
													</td>
													<td>
														<Typography level="body-md">
															{room.location}
														</Typography>
													</td>
												</tr>
											)}
											{room.building && (
												<tr>
													<td>
														<Typography level="body-lg">
															Building
														</Typography>
													</td>
													<td>
														<Typography level="body-md">
															{room.building}
														</Typography>
													</td>
												</tr>
											)}
											{room.floor && (
												<tr>
													<td>
														<Typography level="body-lg">
															Floor
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
															Seating Capacity
														</Typography>
													</td>
													<td>
														<Typography level="body-md">
															{room.capacity}
														</Typography>
													</td>
												</tr>
											)}
											{room.whiteboard != undefined && (
												<tr>
													<td>
														<Typography level="body-lg">
															White Board
														</Typography>
													</td>
													<td>
														<Typography level="body-md">
															{room.whiteboard ? "✅" : "❌"}
														</Typography>
													</td>
												</tr>
											)}
											{room.projector != undefined && (
												<tr>
													<td>
														<Typography level="body-lg">
															Projector
														</Typography>
													</td>
													<td>
														<Typography level="body-md">
															{room.projector ? "✅" : "❌"}
														</Typography>
													</td>
												</tr>
											)}
											{room.directions && (
												<>
													<tr>
														<td colSpan={2}>
															<Typography level="body-lg">
																Directions
															</Typography>
														</td>
													</tr>
													<tr>
														<td colSpan={2}>
															<ol>
																{room.directions.map(
																	(direction, index) => (
																		<React.Fragment key={index}>
																			<li>{direction}</li>
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
				{(!room || Object.keys(room).length <= 0) && (
					<Typography component="h2" id="modal-title" level="h4" fontWeight="lg" mb={3}>
						No such room!
					</Typography>
				)}
			</Container>
			<Grid container>
				<Footer />
			</Grid>
		</>
	);
}

export default RoomDetails;
