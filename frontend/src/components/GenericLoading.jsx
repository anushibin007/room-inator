import React from "react";
import Typography from "@mui/joy/Typography";
import CircularProgress from "@mui/joy/CircularProgress";

export default function GenericLoading() {
	return (
		<>
			<Typography
				startDecorator={<CircularProgress size="sm" variant="plain" />}
				level="title-md"
				sx={{ p: 1, m: 3 }}
			>
				Loading. Please wait.
			</Typography>
		</>
	);
}
