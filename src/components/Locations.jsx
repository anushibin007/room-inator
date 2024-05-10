// React
import React, { useEffect, useState } from "react";
// MUI
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";

import { addHashToCurrentPage } from "../utils/URLHelper";
import Constants from "../utils/Constants";

function Locations() {
	const [locations, setLocations] = useState(undefined);

	useEffect(() => {
		loadLocations();
	}, []);

	const loadLocations = async () => {
		const response = await fetch(`${Constants.BACKEND_SERVER_ROOT}/locations`);
		const data = await response.json();
		setLocations(data["_embedded"].locations);
	};

	const openRoom = (aLocation, e) => {
		if (typeof aLocation === "object") {
			// There is a double redirect happening
			// here. The first one is not sending a
			// id. Rather, it is sending an object.
			// I don't know why it is happening
			// though. We are simply going to ignore
			// that call.
			return;
		}
		addHashToCurrentPage(`building/${aLocation}`);
	};

	return (
		<>
			{locations && locations.length > 0 && (
				<>
					<Table hoverRow>
						<thead>
							<tr>
								<th>Sl No</th>
								<th>Location</th>
							</tr>
						</thead>
						<tbody>
							{locations?.map((location, idx) => (
								<tr
									key={location.id}
									onClick={() => {
										openRoom(location.id);
									}}
									className="clickable"
								>
									<td>{idx + 1}</td>
									<td>{location.name}</td>
								</tr>
							))}
						</tbody>
					</Table>
				</>
			)}
			{!locations && (
				<Typography component="h2" id="modal-title" level="h4" fontWeight="lg" mb={3}>
					Loading
				</Typography>
			)}
			{locations?.length <= 0 && (
				<Typography component="h2" id="modal-title" level="h4" fontWeight="lg" mb={3}>
					Sorry, no locations were found for the given query.
				</Typography>
			)}
		</>
	);
}

export default Locations;
