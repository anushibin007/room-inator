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
			<Grid container spacing={5} id="search-results-wrapper" marginTop={5}>
				{rooms.map((room) => (
					<Grid key={room.id} xs={12} md="auto" lg={6} xl={3} xxl={3}>
						<Card
							variant="plain"
							onClick={() => showModal(room)}
							sx={{ minHeight: "280px", width: 320 }}
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
								<Typography level="title-lg" textColor="#fff" mb={1}>
									{room.n}
								</Typography>
								<Typography
									startDecorator={<LocationOnRoundedIcon />}
									textColor="neutral.300"
									mb={1}
								>
									{room.l}
								</Typography>
								<Typography
									startDecorator={<BusinessIcon />}
									textColor="neutral.300"
									mb={1}
								>
									{room.b}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
			<RoomDetails show={modalShow} onHide={() => setModalShow(false)} room={roomForModal} />
		</>
	);
}

export default SearchResults;
