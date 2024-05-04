// MUI
import { Container, Grid, Typography } from "@mui/joy";
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
						<Grid container xs={12} alignItems="center">
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
											<Typography level="body-lg">
												Seating Capacity
											</Typography>
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
