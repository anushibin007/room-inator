// React
import React, { useEffect, useState } from "react";
// MUI
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";

import { getURLForCriteriaAndValue } from "../utils/URLHelper";
import Container from "@mui/joy/Container";
import Grid from "@mui/joy/Grid";
import Skeleton from "@mui/joy/Skeleton";
import ErrorMessage from "./ErrorMessage";
import NavButtons from "./navbuttons/NavButtons";
import GenericLoading from "./GenericLoading";

export default function Buildings() {
	const criteria = "Building";
	const [data, setData] = useState(undefined);
	const [errorState, setErrorState] = useState(undefined);

	useEffect(() => {
		loadData();
	}, []);

	const loadData = async () => {
		try {
			const response = await fetch(getURLForCriteriaAndValue(criteria));
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
							<Grid>
								<Typography id="modal-title" level="title-md" my={1}>
									Please pick a {criteria}
								</Typography>
							</Grid>
							{
								// TODO: Add Breadcrumbs to the base pickers as well
							}
							<Grid xs={12}>
								<Typography level="body-xs">
									Total buildings: {data.length}
								</Typography>
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
											<a href={`#building/${aData.id}`}>{aData.name}</a>
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
