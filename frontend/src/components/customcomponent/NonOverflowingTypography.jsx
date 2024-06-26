import Typography from "@mui/joy/Typography";

function NonOverflowingTypography(props) {
	return (
		<Typography
			{...props}
			textOverflow="ellipsis"
			whiteSpace="nowrap"
			overflow="hidden"
			mb={1}
			title={props.children}
		>
			{props.children}
		</Typography>
	);
}

export default NonOverflowingTypography;
