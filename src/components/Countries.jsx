// React
import React, { useEffect, useState } from "react";
// MUI
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";

import { addHashToCurrentPage } from "../utils/URLHelper";
import Constants from "../utils/Constants";

function Countries() {
	const [countries, setCountries] = useState(undefined);

	useEffect(() => {
		loadCountries();
	}, []);

	const loadCountries = async () => {
		const response = await fetch(`${Constants.BACKEND_SERVER_ROOT}/countries`);
		const data = await response.json();
		setCountries(data["_embedded"].countries);
	};

	const openRoom = (aCountry, e) => {
		if (typeof aCountry === "object") {
			// There is a double redirect happening
			// here. The first one is not sending a
			// id. Rather, it is sending an object.
			// I don't know why it is happening
			// though. We are simply going to ignore
			// that call.
			return;
		}
		addHashToCurrentPage(`country/${aCountry}`);
	};

	return (
		<>
			{countries && countries.length > 0 && (
				<>
					<Table hoverRow>
						<thead>
							<tr>
								<th>Sl No</th>
								<th>Country</th>
							</tr>
						</thead>
						<tbody>
							{countries?.map((country, idx) => (
								<tr
									key={country.id}
									onClick={() => {
										openRoom(country.id);
									}}
									className="clickable"
								>
									<td>{idx + 1}</td>
									<td>{country.name}</td>
								</tr>
							))}
						</tbody>
					</Table>
				</>
			)}
			{!countries && (
				<Typography component="h2" id="modal-title" level="h4" fontWeight="lg" mb={3}>
					Loading
				</Typography>
			)}
			{countries?.length <= 0 && (
				<Typography component="h2" id="modal-title" level="h4" fontWeight="lg" mb={3}>
					Sorry, no countries were found for the given query.
				</Typography>
			)}
		</>
	);
}

export default Countries;
