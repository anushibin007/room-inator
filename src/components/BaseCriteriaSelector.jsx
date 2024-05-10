// React
import React, { useEffect, useState } from "react";
// MUI
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";

import { addHashToCurrentPage, getURLForCriteria } from "../utils/URLHelper";
import { getJSONKeyForCriteria } from "../utils/JSONHelper";

/**
 * This class is a common class to select Country, Location and Building
 * @param {*} criteria one of "Country", "Location", or "Building"
 * @returns
 */
function BaseCriteriaSelector({ criteria }) {
	const [data, setData] = useState(undefined);

	useEffect(() => {
		loadData();
	}, []);

	const loadData = async () => {
		const response = await fetch(getURLForCriteria(criteria));
		const responseData = await response.json();
		const jsonKey = getJSONKeyForCriteria(criteria);
		setData(responseData["_embedded"][jsonKey]);
	};

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
			{data && data.length > 0 && (
				<>
					<Table hoverRow>
						<thead>
							<tr>
								<th>Sl No</th>
								<th>{criteria}</th>
							</tr>
						</thead>
						<tbody>
							{data?.map((aData, idx) => (
								<tr
									key={aData.id}
									onClick={() => {
										openItem(aData.id);
									}}
									className="clickable"
								>
									<td>{idx + 1}</td>
									<td>{aData.name}</td>
								</tr>
							))}
						</tbody>
					</Table>
				</>
			)}
			{!data && (
				<Typography component="h2" id="modal-title" level="h4" fontWeight="lg" mb={3}>
					Loading
				</Typography>
			)}
			{data?.length <= 0 && (
				<Typography component="h2" id="modal-title" level="h4" fontWeight="lg" mb={3}>
					Sorry, {criteria} not found for the given query.
				</Typography>
			)}
		</>
	);
}

export default BaseCriteriaSelector;
