import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ButtonWithLink from "./ButtonWithLink";

const HomeButton = () => {
	return (
		<>
			<ButtonWithLink href={"/"} buttonIcon={<HomeIcon />} />
		</>
	);
};

export default HomeButton;
