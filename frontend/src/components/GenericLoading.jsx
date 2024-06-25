import React from "react";
import Typography from "@mui/joy/Typography";
import CircularProgress from "@mui/joy/CircularProgress";

export default function GenericLoading({ text }) {
	return (
		<>
			<Typography
				startDecorator={<CircularProgress size="sm" variant="plain" />}
				level="title-md"
				sx={{ p: 1, m: 3 }}
			>
				{text}
				{!text && <>Loading. Please wait.</>}
			</Typography>
		</>
	);
}
