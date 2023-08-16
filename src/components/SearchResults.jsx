// React
import { useState } from "react";
// MUI
import { Grid } from "@mui/joy";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import BusinessIcon from "@mui/icons-material/Business";
import StairsIcon from "@mui/icons-material/Stairs";
import PeopleIcon from "@mui/icons-material/People";

import RoomDetails from "./RoomDetails";

function SearchResults({ rooms, darkMode }) {
	/**
	 * State of the visibility of the Modal
	 */
	const [modalShow, setModalShow] = useState(false);

	/**
	 * State of the room that needs to be shown in the Modal
	 */
	const [roomForModal, setRoomForModal] = useState({});

	/**
	 * Function to show the Modal
	 * @param {*} aRoom The room whose detail needs to be shown in the Modal
	 * @param {*} e
	 */
	const showModal = (aRoom, e) => {
		console.log(aRoom);
		setModalShow(true);
		setRoomForModal(aRoom);
	};

	return (
		<>
			<Grid container id="search-results-wrapper" marginTop={5} xs={12}>
				{rooms.map((room) => (
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
							<Card variant="outlined" onClick={() => showModal(room)}>
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
											<Typography level="title-lg" textColor="#fff" mb={1}>
												{room.n}
											</Typography>
										</Grid>
										<Grid xs={6}>
											<Typography
												startDecorator={<LocationOnRoundedIcon />}
												textColor="neutral.300"
												mb={1}
											>
												{room.l}
											</Typography>
										</Grid>
										<Grid xs={6}>
											<Typography
												startDecorator={<BusinessIcon />}
												textColor="neutral.300"
												mb={1}
											>
												{room.b}
											</Typography>
										</Grid>
										<Grid xs={6}>
											<Typography
												startDecorator={<StairsIcon />}
												textColor="neutral.300"
												mb={1}
											>
												{room.f}
											</Typography>
										</Grid>
										<Grid xs={6}>
											<Typography
												startDecorator={<PeopleIcon />}
												textColor="neutral.300"
												mb={1}
											>
												{room.s}
											</Typography>
										</Grid>
									</Grid>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				))}
			</Grid>
			<RoomDetails show={modalShow} onHide={() => setModalShow(false)} room={roomForModal} />
		</>
	);
}

export default SearchResults;
