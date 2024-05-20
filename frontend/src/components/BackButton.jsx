import { Button, Link } from "@mui/joy";
import React from "react";

const BackButton = ({ href }) => {
	const handleClick = (event) => {
		if (href) {
			return;
		}
		event.preventDefault();
		history.back();
	};

	return (
		<>
			<Link underline="none" href={href} onClick={handleClick}>
				<Button variant="plain">&#8592;</Button>
			</Link>
		</>
	);
};

export default BackButton;
