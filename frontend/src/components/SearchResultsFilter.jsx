import * as React from "react";

import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import Avatar from "@mui/joy/Avatar";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import Box from "@mui/joy/Box";
import Checkbox from "@mui/joy/Checkbox";
import { Typography } from "@mui/joy";

export default function SearchResultsFilter() {
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
								<Checkbox label="4" defaultChecked />
								<Checkbox label="6" defaultChecked />
								<Checkbox label="8" defaultChecked />
								<Checkbox label="12" defaultChecked />
								<Checkbox label="20" defaultChecked />
							</Box>
						</>
					</AccordionDetails>
				</Accordion>
			</AccordionGroup>
		</>
	);
}
