// React
import React from "react";

import Grid from "@mui/joy/Grid";
import { Table } from "antd";

function SearchResultsListView({ rooms }) {
	const dataSource = rooms?.map((room) => ({ ...room, key: room.id }));
	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
			render: (text, record) => <a href={`#room/${record.id}`}>{text}</a>,
			sorter: (a, b) => a.name.localeCompare(b.name),
		},
		{
			title: "Floor",
			dataIndex: "floor",
			key: "floor",
			filters: getUniqueFloors(),
			onFilter: (value, record) => record.floor === value,
			sorter: (a, b) => a.floor - b.floor,
			defaultSortOrder: "ascend",
		},
		{
			title: "Seating capacity",
			dataIndex: "capacity",
			key: "capacity",
			filters: getUniqueSeatingCapacities(),
			onFilter: (value, record) => record.capacity === value,
			sorter: (a, b) => a.capacity - b.capacity,
		},
	];

	function getUniqueSeatingCapacities() {
		return getUniqueValuesByKeyForFilter("capacity");
	}

	function getUniqueFloors() {
		return getUniqueValuesByKeyForFilter("floor");
	}

	/**
	 * This function constructs the required
	 * JS Array for the filters in the list view.
	 * The filters such as unique room capacity
	 * and floor number, etc.
	 *
	 * @param {*} key The key in the rooms array
	 * @returns An array in the format [{text: "value", value: "value"}]
	 */
	function getUniqueValuesByKeyForFilter(key) {
		const uniqueValues = new Set();
		rooms?.forEach((room) => uniqueValues.add(room[key]));
		return Array.from(uniqueValues)
			.sort((a, b) => a - b)
			.map((aValue) => {
				return { text: aValue, value: aValue };
			});
	}

	return (
		<>
			<Grid container xs={12} mt={2}>
				{rooms && rooms.length > 0 && (
					<Grid xs={12}>
						<Table
							dataSource={dataSource}
							columns={columns}
							size="small"
							tableLayout="fixed"
							pagination={false}
						/>
					</Grid>
				)}
			</Grid>
		</>
	);
}

export default SearchResultsListView;
