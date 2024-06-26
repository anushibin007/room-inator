import { IconButton, Link } from "@mui/joy";
import React from "react";

const ButtonWithLink = ({ href, onClickHandler, buttonIcon }) => {
	return (
		<>
			<Link href={href} onClick={onClickHandler}>
				<IconButton variant="plain">{buttonIcon}</IconButton>
			</Link>
		</>
	);
};

export default ButtonWithLink;
