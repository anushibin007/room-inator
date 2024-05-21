import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ButtonWithLink from "./ButtonWithLink";

const BackButton = ({ href }) => {
	const handleClick = (event) => {
		if (href) {
			// If we have a link to redirect to,
			// then don't bother calling the JS
			// function below
			return;
		}
		event.preventDefault();
		history.back();
	};

	return (
		<>
			<ButtonWithLink
				href={href}
				onClickHandler={handleClick}
				buttonIcon={<ArrowBackIcon />}
			/>
		</>
	);
};

export default BackButton;
