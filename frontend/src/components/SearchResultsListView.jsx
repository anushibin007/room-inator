// React
import React from "react";

import Grid from "@mui/joy/Grid";
import { Table } from "antd";

function SearchResultsListView({ rooms }) {
	const dataSource = rooms;
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
			// TODO: This needs to be fetched from the backend
			filters: [
				{
					text: "8",
					value: 8,
				},
				{
					text: "9",
					value: 9,
				},
				{
					text: "10",
					value: 10,
				},
			],
			onFilter: (value, record) => record.floor === value,
			sorter: (a, b) => a.floor - b.floor,
			defaultSortOrder: "ascend",
		},
		{
			title: "Seating capacity",
			dataIndex: "capacity",
			key: "capacity",
			// TODO: This needs to be fetched from the backend
			filters: [
				{
					text: "4",
					value: 4,
				},
				{
					text: "6",
					value: 6,
				},
				{
					text: "8",
					value: 8,
				},
				{
					text: "10",
					value: 10,
				},
				{
					text: "12",
					value: 12,
				},
				{
					text: "20",
					value: 20,
				},
			],
			onFilter: (value, record) => record.capacity === value,
			sorter: (a, b) => a.capacity - b.capacity,
		},
	];

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
