// React
import React from "react";

import { addHashToCurrentPage } from "../utils/URLHelper";

import "primereact/resources/themes/lara-light-cyan/theme.css";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Grid } from "@mui/joy";

function SearchResultsListView({ rooms }) {
	const openRoom = (e) => {
		addHashToCurrentPage(`room/${e.data.id}`);
	};

	return (
		<>
			<Grid container xs={12} mt={2}>
				<Grid xs={12}>
					<DataTable
						value={rooms}
						dataKey="id"
						sortField="name"
						removableSort
						filterDisplay="row"
						emptyMessage="No rooms found."
						selectionMode="single"
						onRowSelect={openRoom}
					>
						<Column
							sortable
							filter
							filterPlaceholder="Search by name"
							field="name"
							header="Room Name"
							oncli
						></Column>
						<Column
							sortable
							filter
							filterPlaceholder="Filter by floor"
							field="floor"
							header="Floor"
						></Column>
						<Column
							sortable
							filter
							filterPlaceholder="Filter by seating capacity"
							field="capacity"
							header="Seating capacity"
						></Column>
					</DataTable>
				</Grid>
			</Grid>
		</>
	);
}

export default SearchResultsListView;
