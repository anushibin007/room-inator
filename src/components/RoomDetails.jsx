// MUI
import { Container, Grid, Typography, IconButton } from "@mui/joy";
import HomeIcon from "@mui/icons-material/Home";
import React from "react";
import Constants from "../utils/Constants";

function RoomDetails(props) {
	const room = props.room;
	return (
		<>
			{room && Object.keys(room).length > 0 && (
				<Container sx={{ marginTop: 1 }}>
					<Grid container xs={12} alignItems="center">
						<Grid xs={1}>
							<a href={Constants.BASE_PATH}>
								<IconButton>
									<HomeIcon />
								</IconButton>
							</a>
						</Grid>
						<Grid xs={11}>
							<Typography component="h2" id="modal-title" level="h4" fontWeight="lg">
								{room.n}
							</Typography>
						</Grid>
					</Grid>
					<Grid container xs={12}>
						<Grid container xs={12} md={3} spacing={1}>
							{room.c && (
								<Grid container spacing={2} xs={12} alignItems="center">
									<Grid xs={6}>
										<Typography level="body-lg">Country</Typography>
									</Grid>
									<Grid xs={6}>
										<Typography level="body-md">{room.c}</Typography>
									</Grid>
								</Grid>
							)}
							{room.l && (
								<Grid container spacing={2} xs={12} alignItems="center">
									<Grid xs={6}>
										<Typography level="body-lg">Location</Typography>
									</Grid>
									<Grid xs={6}>
										<Typography level="body-md">{room.l}</Typography>
									</Grid>
								</Grid>
							)}
							{room.b && (
								<Grid container spacing={2} xs={12} alignItems="center">
									<Grid xs={6}>
										<Typography level="body-lg">Building</Typography>
									</Grid>
									<Grid xs={6}>
										<Typography level="body-md">{room.b}</Typography>
									</Grid>
								</Grid>
							)}
							{room.f && (
								<Grid container spacing={2} xs={12} alignItems="center">
									<Grid xs={6}>
										<Typography level="body-lg">Floor</Typography>
									</Grid>
									<Grid xs={6}>
										<Typography level="body-md">{room.f}</Typography>
									</Grid>
								</Grid>
							)}
							{room.s && (
								<Grid container spacing={2} xs={12} alignItems="center">
									<Grid xs={6}>
										<Typography level="body-lg">Seating Capacity</Typography>
									</Grid>
									<Grid xs={6}>
										<Typography level="body-md">{room.s}</Typography>
									</Grid>
								</Grid>
							)}
							{room.wb && (
								<Grid container spacing={2} xs={12} alignItems="center">
									<Grid xs={6}>
										<Typography level="body-lg">White Board</Typography>
									</Grid>
									<Grid xs={6}>
										<Typography level="body-md">
											{room.wb ? "✅" : "❌"}
										</Typography>
									</Grid>
								</Grid>
							)}
							{room.pr && (
								<Grid container spacing={2} xs={12} alignItems="center">
									<Grid xs={6}>
										<Typography level="body-lg">Projector</Typography>
									</Grid>
									<Grid xs={6}>
										<Typography level="body-md">
											{room.pr ? "✅" : "❌"}
										</Typography>
									</Grid>
								</Grid>
							)}
							{room.di && (
								<>
									<Grid container spacing={2} xs={12} alignItems="center">
										<Grid>
											<Typography level="body-lg">Directions</Typography>
										</Grid>
									</Grid>
									<Grid container spacing={2} xs={12} alignItems="center">
										<Grid>
											<Grid>
												<ol>
													{room.di.map((direction, index) => (
														<React.Fragment key={index}>
															<li>{direction}</li>
														</React.Fragment>
													))}
												</ol>
											</Grid>
										</Grid>
									</Grid>
								</>
							)}
						</Grid>
						<Grid container xs={12} md={9}>
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
					</Grid>
				</Container>
			)}
			{(!room || Object.keys(room).length <= 0) && (
				<Typography component="h2" id="modal-title" level="h4" fontWeight="lg" mb={3}>
					No such room!
				</Typography>
			)}
		</>
	);
}

export default RoomDetails;
