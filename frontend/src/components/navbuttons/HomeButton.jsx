import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ButtonWithLink from "./ButtonWithLink";
import Constants from "../../utils/Constants";

const HomeButton = () => {
	return (
		<>
			<ButtonWithLink href={Constants.BASE_PATH} buttonIcon={<HomeIcon />} />
		</>
	);
};

export default HomeButton;
