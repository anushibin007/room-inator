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
			if (room && Object.keys(room).length > 0) {
				ReactGA.send({
					hitType: "pageview",
					page: window.location.hash,
					title: `Home`,
				});
			}
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
								<Grid key={aData.id} padding={2}>
									<Card
										sx={{
											width: 320,
											maxWidth: "100%",
											boxShadow: "lg",
										}}
									>
										<CardContent>
											<Typography level="body-xs">
												{getCountryAndLocationNames(aData.locationId)}
											</Typography>
											<Typography
												level="title-lg"
												sx={{ mt: 1, fontWeight: "xl" }}
											>
												{aData.name}
											</Typography>
										</CardContent>
										<CardOverflow>
											<Button
												variant="solid"
												color="primary"
												size="lg"
												component="a"
												href={`#building/${aData.id}`}
											>
												Visit
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
