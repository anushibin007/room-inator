import * as React from "react";
import { useState } from "react";

import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import Avatar from "@mui/joy/Avatar";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import Box from "@mui/joy/Box";
import Checkbox from "@mui/joy/Checkbox";
import { Typography } from "@mui/joy";

export default function SearchResultsFilter({ rooms, setRooms }) {
	const originalRooms = [...rooms];

	const [seatingCapacity, setSeatingCapacity] = useState({
		All: true,
		4: true,
		6: true,
		8: true,
		12: true,
		20: true,
	});

	const handleSeatingCapacityChange = (event) => {
		const { name, checked } = event.target;

		if (name === "All") {
			// If 'All' is checked or unchecked, update all checkboxes accordingly
			const newCheckboxes = Object.fromEntries(
				Object.entries(seatingCapacity).map(([key, value]) => [key, checked])
			);
			setSeatingCapacity(newCheckboxes);
		} else {
			setSeatingCapacity((prevState) => ({
				...prevState,
				[name]: checked,
			}));
		}
	};

	React.useEffect(() => {
		filterRooms();
	}, [seatingCapacity]);

	const filterRooms = () => {
		const filteredRooms = originalRooms.filter((room) => {
			if (seatingCapacity[4] && room.capacity === 4) return room;
			if (seatingCapacity[6] && room.capacity === 6) return room;
			if (seatingCapacity[8] && room.capacity === 8) return room;
			if (seatingCapacity[12] && room.capacity === 12) return room;
			if (seatingCapacity[20] && room.capacity === 20) return room;
		});
		setRooms(filteredRooms);
	};

	return (
		<>
			<AccordionGroup transition="0.2s ease">
				<Accordion>
					<AccordionSummary>
						<Avatar color="primary">
							<FilterAltIcon />
						</Avatar>
						Filters
					</AccordionSummary>
					<AccordionDetails>
						<>
							<Box sx={{ display: "flex", gap: 3 }} marginTop={2}>
								<Typography>Floor</Typography>
								<Checkbox label="10" defaultChecked />
							</Box>
							<Box sx={{ display: "flex", gap: 3 }} marginTop={2}>
								<Typography>Seating capacity</Typography>
								{Object.keys(seatingCapacity).map((key) => (
									<Checkbox
										key={key}
										label={key}
										name={key}
										checked={seatingCapacity[key]}
										onChange={handleSeatingCapacityChange}
									/>
								))}
							</Box>
						</>
					</AccordionDetails>
				</Accordion>
			</AccordionGroup>
		</>
	);
}
