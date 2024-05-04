// MUI
import { Container, Grid, Table, Typography } from "@mui/joy";
import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

function RoomDetails(props) {
	const room = props.room;

	useEffect(() => {
		// Update the Web Page's title
		// whenever the room's state updates
		updatePageTitle();
	}, [room]);

	const updatePageTitle = () => {
		if (room && Object.keys(room).length > 0) {
			document.title = `${room.n} - room-inator`;
		}
	};
	return (
		<>
			<Grid container paddingX={3}>
				<Grid xs={12}>
					<Header simpleMode={true} />
				</Grid>
			</Grid>
			<Container sx={{ marginTop: 1 }}>
				{room && Object.keys(room).length > 0 && (
					<>
						<Grid container xs={12}>
							<Grid container xs={6}>
								{/*room.i.map((anImageSrc, index) => (
									<Grid key={index} xs={12}>
										<img src={`${anImageSrc}?random=${index}`} />
									</Grid>
								))*/}
								<Grid container xs={12} alignItems="center" justifyContent="center">
									<Grid>
										<img
											src={`${room.i ? room.i[0] : ""}`}
											style={{ maxHeight: "500px", maxWidth: "500px" }}
										/>
									</Grid>
								</Grid>
							</Grid>
							<Grid container xs={6} alignItems="center">
								<Grid xs={12}>
									<Typography
										component="h2"
										id="modal-title"
										level="h4"
										fontWeight="lg"
									>
										{room.n}
									</Typography>
								</Grid>
								<Table>
									<tbody>
										{room.c && (
											<tr>
												<td>
													<Typography level="body-lg">Country</Typography>
												</td>
												<td>
													<Typography level="body-md">
														{room.c}
													</Typography>
												</td>
											</tr>
										)}
										{room.l && (
											<tr>
												<td>
													<Typography level="body-lg">
														Location
													</Typography>
												</td>
												<td>
													<Typography level="body-md">
														{room.l}
													</Typography>
												</td>
											</tr>
										)}
										{room.b && (
											<tr>
												<td>
													<Typography level="body-lg">
														Building
													</Typography>
												</td>
												<td>
													<Typography level="body-md">
														{room.b}
													</Typography>
												</td>
											</tr>
										)}
										{room.f && (
											<tr>
												<td>
													<Typography level="body-lg">Floor</Typography>
												</td>
												<td>
													<Typography level="body-md">
														{room.f}
													</Typography>
												</td>
											</tr>
										)}
										{room.s && (
											<tr>
												<td>
													<Typography level="body-lg">
														Seating Capacity
													</Typography>
												</td>
												<td>
													<Typography level="body-md">
														{room.s}
													</Typography>
												</td>
											</tr>
										)}
										{room.wb != undefined && (
											<tr>
												<td>
													<Typography level="body-lg">
														White Board
													</Typography>
												</td>
												<td>
													<Typography level="body-md">
														{room.wb ? "✅" : "❌"}
													</Typography>
												</td>
											</tr>
										)}
										{room.pr != undefined && (
											<tr>
												<td>
													<Typography level="body-lg">
														Projector
													</Typography>
												</td>
												<td>
													<Typography level="body-md">
														{room.pr ? "✅" : "❌"}
													</Typography>
												</td>
											</tr>
										)}
										{room.di && (
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
															{room.di.map((direction, index) => (
																<React.Fragment key={index}>
																	<li>{direction}</li>
																</React.Fragment>
															))}
														</ol>
													</td>
												</tr>
											</>
										)}
									</tbody>
								</Table>
							</Grid>
						</Grid>
					</>
				)}
				{(!room || Object.keys(room).length <= 0) && (
					<Typography component="h2" id="modal-title" level="h4" fontWeight="lg" mb={3}>
						No such room!
					</Typography>
				)}
				<Footer />
			</Container>
		</>
	);
}

export default RoomDetails;
