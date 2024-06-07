import { useParams } from "react-router-dom";
import RoomDetails from "./RoomDetails";
import { useState, useEffect } from "react";
import Constants from "../utils/Constants";
import Header from "./Header";
import Footer from "./Footer";
import ErrorMessage from "./ErrorMessage";
import Container from "@mui/joy/Container";
import Skeleton from "@mui/joy/Skeleton";
import Grid from "@mui/joy/Grid";
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";

function RoomDetailsRoute() {
	const { roomId } = useParams();
	const [room, setRoom] = useState(undefined);
	const [errorState, setErrorState] = useState(undefined);

	useEffect(() => {
		loadRoom();
	}, []);

	const loadRoom = async () => {
		try {
			const response = await fetch(`${Constants.BACKEND_SERVER_ROOT}/rooms/${roomId}`);
			const data = await response.json();
			setRoom(data);
		} catch (err) {
			console.error({ error: err });
			setErrorState({ error: err });
		}
	};

	return (
		<>
			<Header simpleMode={true} />
			<Container>
				<RoomDetails room={room} errorState={errorState} />
				{!errorState && !room && (
					<>
						<Grid container xs={12}>
							<Grid container xs={12} md={6}>
								<Grid
									container
									xs={12}
									sx={{ padding: 3 }}
									alignItems="center"
									justifyContent="center"
								>
									<Skeleton variant="rectangular" width={300} height={300} />
								</Grid>
							</Grid>
							<Grid container xs={12} md={6} alignItems="center">
								<Grid xs={12} sx={{ padding: 3 }}>
									<Table>
										<thead>
											<tr>
												<th style={{ width: "10%" }}>
													<Skeleton variant="text" level="h3" />
												</th>
												<th>
													<Skeleton variant="text" level="h3" />
												</th>
											</tr>
										</thead>
										<tbody>
											{[...Array(5)].map((_, idx) => (
												<tr key={idx}>
													<td>
														<Skeleton variant="text" level="h4" />
													</td>
													<td>
														<Skeleton variant="text" level="h4" />
													</td>
												</tr>
											))}
											<tr>
												<td
													colSpan={2}
													style={{
														borderBottom: "none",
													}}
												>
													<Skeleton variant="text" level="h4" />
												</td>
											</tr>
											<tr>
												<td colSpan={2}>
													<ol>
														{[...Array(5)].map((_, idx) => (
															<li key={idx}>
																<Skeleton variant="text" />
															</li>
														))}
													</ol>
												</td>
											</tr>
										</tbody>
									</Table>
								</Grid>
							</Grid>
						</Grid>
					</>
				)}
				{!errorState && room && room.error && (
					<Typography component="h2" level="h4" fontWeight="lg">
						No such room!
					</Typography>
				)}
				{errorState && <ErrorMessage errorState={errorState} />}
			</Container>
			<Grid container>
				<Footer />
			</Grid>
		</>
	);
}

export default RoomDetailsRoute;
