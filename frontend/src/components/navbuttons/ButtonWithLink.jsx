import { IconButton } from "@mui/joy";
import React from "react";
import { Link } from "react-router-dom";

const ButtonWithLink = ({ href, onClickHandler, buttonIcon }) => {
	return (
		<>
			<Link to={href} onClick={onClickHandler}>
				<IconButton variant="plain">{buttonIcon}</IconButton>
			</Link>
		</>
	);
};

export default ButtonWithLink;
