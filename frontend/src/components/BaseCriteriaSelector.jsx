// React
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// MUI
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";

import { addHashToCurrentPage, getURLForCriteriaAndValue } from "../utils/URLHelper";
import Container from "@mui/joy/Container";
import Grid from "@mui/joy/Grid";
import Skeleton from "@mui/joy/Skeleton";
import ErrorMessage from "./ErrorMessage";
import NavButtons from "./navbuttons/NavButtons";
import GenericLoading from "./GenericLoading";

/**
 * This class is a common class to select Country, Location and Building
 * @param {*} criteria one of "Country", "Location", or "Building"
 * @returns
 */
function BaseCriteriaSelector({ criteria }) {
	const { criteriaValue } = useParams();
	const [data, setData] = useState(undefined);
	const [errorState, setErrorState] = useState(undefined);

	useEffect(() => {
		loadData();
	}, []);

	const loadData = async () => {
		try {
			const response = await fetch(getURLForCriteriaAndValue(criteria, criteriaValue));
			const responseData = await response.json();
			setData(responseData);
		} catch (err) {
			console.error({ error: err });
			setErrorState({ error: err });
		}
	};

	useEffect(() => {
		// If there is only one row of data,
		// just open it directly
		if (data && data.length == 1) {
			// TODO: Don't make this primary
			// openItem(data[0].id);
		}
	}, [data]);

	const calculateNextHashRoute = () => {
		if (criteria === "Country") {
			return "country";
		}
		if (criteria === "Location") {
			return "location";
		}
		if (criteria === "Building") {
			return "building";
		}
	};

	const openItem = (aData, e) => {
		if (typeof aData === "object") {
			// There is a double redirect happening
			// here. The first one is not sending a
			// id. Rather, it is sending an object.
			// I don't know why it is happening
			// though. We are simply going to ignore
			// that call.
			return;
		}
		addHashToCurrentPage(`${calculateNextHashRoute()}/${aData}`);
	};

	return (
		<>
			<Container sx={{ marginTop: 2 }}>
				{!errorState && !data && (
					<>
						<GenericLoading />
					</>
				)}
				{!errorState && data && data.length > 0 && (
					<>
						<Grid container>
							<Grid mr={1}>{criteria != "Country" && <NavButtons />}</Grid>
							<Grid>
								<Typography id="modal-title" level="title-md" my={1}>
									Please pick a {criteria}
								</Typography>
							</Grid>
							{
								// TODO: Add Breadcrumbs to the base pickers as well
							}
							<Grid xs={12}>
								<Typography level="body-xs">Total count: {data.length}</Typography>
							</Grid>
						</Grid>
						<Table hoverRow>
							<thead>
								<tr>
									<th style={{ width: "10%" }}>Sl No</th>
									<th>{criteria}</th>
								</tr>
							</thead>
							<tbody>
								{data?.map((aData, idx) => (
									<tr key={aData.id}>
										<td>{idx + 1}</td>
										<td>
											<a href={`#${calculateNextHashRoute()}/${aData.id}`}>
												{aData.name}
											</a>
										</td>
									</tr>
								))}
							</tbody>
						</Table>
					</>
				)}
				{!errorState && !data && (
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
				{!errorState && data?.length <= 0 && (
					<Typography id="modal-title" level="title-md" my={1}>
						Sorry, {criteria} not found for the given query.
					</Typography>
				)}
				{errorState && <ErrorMessage errorState={errorState} />}
			</Container>
		</>
	);
}

export default BaseCriteriaSelector;
