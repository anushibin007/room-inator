// React
import React from "react";
// MUI
import Table from "@mui/joy/Table";

import { addHashToCurrentPage } from "../utils/URLHelper";

function SearchResultsListView({ rooms }) {
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
								<th>Floor</th>
								<th>Seating Capacity</th>
							</tr>
						</thead>
						<tbody>
							{rooms?.map((aRoom) => (
								<tr key={aRoom.id}>
									<td>
										<a href={`#room/${aRoom.id}`}>{aRoom.name}</a>
									</td>
									<td>{aRoom.floor}</td>
									<td>{aRoom.capacity}</td>
								</tr>
							))}
						</tbody>
					</Table>
				</>
			)}
		</>
	);
}

export default SearchResultsListView;
