// React
import React, { useEffect, useState } from "react";
// MUI
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";

import { addHashToCurrentPage } from "../utils/URLHelper";
import Constants from "../utils/Constants";

function Buildings() {
	const [buildings, setBuildings] = useState(undefined);

	useEffect(() => {
		loadBuildings();
	}, []);

	const loadBuildings = async () => {
		const response = await fetch(`${Constants.BACKEND_SERVER_ROOT}/buildings`);
		const data = await response.json();
		setBuildings(data["_embedded"].buildings);
	};

	const openRoom = (aBuilding, e) => {
		if (typeof aBuilding === "object") {
			// There is a double redirect happening
			// here. The first one is not sending a
			// id. Rather, it is sending an object.
			// I don't know why it is happening
			// though. We are simply going to ignore
			// that call.
			return;
		}
		addHashToCurrentPage(`rooms/${aBuilding}`);
	};

	return (
		<>
			{buildings && buildings.length > 0 && (
				<>
					<Table hoverRow>
						<thead>
							<tr>
								<th>Sl No</th>
								<th>Building</th>
							</tr>
						</thead>
						<tbody>
							{buildings?.map((building, idx) => (
								<tr
									key={building.id}
									onClick={() => {
										openRoom(building.id);
									}}
									className="clickable"
								>
									<td>{idx + 1}</td>
									<td>{building.name}</td>
								</tr>
							))}
						</tbody>
					</Table>
				</>
			)}
			{!buildings && (
				<Typography component="h2" id="modal-title" level="h4" fontWeight="lg" mb={3}>
					Loading
				</Typography>
			)}
			{buildings?.length <= 0 && (
				<Typography component="h2" id="modal-title" level="h4" fontWeight="lg" mb={3}>
					Sorry, no buildings were found for the given query.
				</Typography>
			)}
		</>
	);
}

export default Buildings;
