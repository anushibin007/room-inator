// React
import React from "react";
// MUI
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";

import { addHashToCurrentPage } from "../utils/URLHelper";

function SearchResultsListView({ rooms, darkMode }) {
	const openRoom = (aRoom, e) => {
		if (typeof aRoom === "object") {
			// There is a double redirect happening
			// here. The first one is not sending a
			// id. Rather, it is sending an object.
			// I don't know why it is happening
			// though. We are simply going to ignore
			// that call.
			return;
		}
		addHashToCurrentPage(`room/${aRoom}`);
	};

	return (
		<>
			{rooms && rooms.length > 0 && (
				<>
					<Table hoverRow>
						<thead>
							<tr>
								<th>Room Name</th>
								<th>Location</th>
								<th>Building</th>
								<th>Floor</th>
								<th>Seating Capacity</th>
							</tr>
						</thead>
						<tbody>
							{rooms?.map((room) => (
								<tr
									key={room.id}
									onClick={() => {
										openRoom(room.id);
									}}
									className="clickable"
								>
									<td>{room.n}</td>
									<td>{room.l}</td>
									<td>{room.b}</td>
									<td>{room.f}</td>
									<td>{room.s}</td>
								</tr>
							))}
						</tbody>
					</Table>
				</>
			)}
			{(!rooms || rooms.length <= 0) && (
				<Typography component="h2" id="modal-title" level="h4" fontWeight="lg" mb={3}>
					Sorry, no rooms were found for the given query.
				</Typography>
			)}
		</>
	);
}

export default SearchResultsListView;
