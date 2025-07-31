// React
import React, { useEffect, useState } from "react";
// MUI
import Table from "@mui/joy/Table";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";

import { getURLForCriteriaAndValue } from "../utils/URLHelper";
import Container from "@mui/joy/Container";
import Grid from "@mui/joy/Grid";
import Skeleton from "@mui/joy/Skeleton";
import ErrorMessage from "./ErrorMessage";
import GenericLoading from "./GenericLoading";
import Constants from "../utils/Constants";
import ReactGA from "react-ga4";

export default function Buildings() {
	const criteria = "Building";
	const [buildings, setBuildings] = useState(undefined);
	const [locations, setLocations] = useState(undefined);
	const [countries, setCountries] = useState(undefined);
	const [errorState, setErrorState] = useState(undefined);

	useEffect(() => {
		loadBuildings();
		loadLocations();
		loadCountries();
		logGoogleAnalytics();
	}, []);

	const loadBuildings = async () => {
		try {
			const response = await fetch(getURLForCriteriaAndValue(criteria));
			const responseData = await response.json();
			setBuildings(responseData);
		} catch (err) {
			console.error({ error: err });
			setErrorState({ error: err });
		}
	};

	const loadLocations = async () => {
		try {
			const response = await fetch(`${Constants.BACKEND_SERVER_ROOT}/locations`);
			const responseData = await response.json();
			setLocations(responseData);
		} catch (err) {
			console.error({ error: err });
			setErrorState({ error: err });
		}
	};
	const loadCountries = async () => {
		try {
			const response = await fetch(`${Constants.BACKEND_SERVER_ROOT}/countries`);
			const responseData = await response.json();
			setCountries(responseData);
		} catch (err) {
			console.error({ error: err });
			setErrorState({ error: err });
		}
	};

	const getCountryAndLocationNames = (locationId) => {
		const filteredLocation = locations?.filter((aLoc) => aLoc.id === locationId);
		const filteredCountry =
			filteredLocation &&
			countries?.filter((aCountry) => aCountry.id === filteredLocation[0].countryId);
		if (!filteredLocation || !filteredCountry) {
			return "";
		}
		return `${filteredCountry[0].name} / ${filteredLocation[0].name}`;
	};

	const logGoogleAnalytics = () => {
		if (Constants.GOOGLE_ANALYTICS_TAG) {
			ReactGA.send({
				hitType: "pageview",
				page: window.location.href,
				title: `Home`,
			});
		}
	};

	return (
		<>
			<Container sx={{ marginTop: 2 }}>
				{!errorState && !buildings && (
					<>
						<GenericLoading />
					</>
				)}
				{!errorState && buildings && buildings.length > 0 && (
					<>
						<Grid container>
							<Grid>
								<Typography id="modal-title" level="title-md" my={1}>
									Please pick a {criteria}
								</Typography>
							</Grid>
						</Grid>
						<Grid container mt={2}>
							{buildings?.map((aData) => (
								<Grid key={aData.id} xs={12} sm={6} md={4} lg={3} padding={2}>
									<Card
										sx={{
											width: "100%",
											height: "100%",
											minHeight: 200,
											boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
											borderRadius: "20px",
											background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
											border: "1px solid rgba(0,0,0,0.04)",
											transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
											position: "relative",
											overflow: "hidden",
											"&:hover": {
												transform: "translateY(-8px)",
												boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
											},
											"&::before": {
												content: '""',
												position: "absolute",
												top: 0,
												left: 0,
												right: 0,
												height: "4px",
												background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
											}
										}}
									>
										<CardContent sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column" }}>
											<div style={{ flexGrow: 1 }}>
												level="body-xs"
												sx={{ 
													color: "text.secondary",
													fontWeight: 500,
													textTransform: "uppercase",
													letterSpacing: "0.8px",
													mb: 1.5
												}}
											><Typography>
												{getCountryAndLocationNames(aData.locationId)}
											</Typography>
											<Typography level="body-xs">
												{getCountryAndLocationNames(aData.locationId)}
											</Typography>
											<Typography
												level="title-lg"
												sx={{ 
													fontWeight: 700,
													fontSize: "1.4rem",
													lineHeight: 1.3,
													color: "text.primary"
												}}
											>
												{aData.name}
											</Typography>
											</div>
										</CardContent>
										<CardOverflow>
											<Button
												variant="solid"
												size="lg"
												component="a"
												href={`#building/${aData.id}`}
												sx={{
													background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
													borderRadius: 0,
													py: 1.5,
													fontSize: "0.95rem",
													fontWeight: 600,
													textTransform: "none",
													letterSpacing: "0.3px",
													"&:hover": {
														background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
													}
												}}
											>
												Explore Rooms
											</Button>
										</CardOverflow>
									</Card>
								</Grid>
							))}
						</Grid>
					</>
				)}
				{!errorState && !buildings && (
					<>
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
								{[...Array(2)].map((_, idx) => (
									<tr key={idx}>
										<td>
											<Skeleton variant="text" level="h4" />
										</td>
										<td>
											<Skeleton variant="text" level="h4" />
										</td>
									</tr>
								))}
							</tbody>
						</Table>
					</>
				)}
				{!errorState && buildings?.length <= 0 && (
					<Typography id="modal-title" level="title-md" my={1}>
						Sorry, {criteria} not found for the given query.
					</Typography>
				)}
				{errorState && <ErrorMessage errorState={errorState} />}
			</Container>
		</>
	);
}
