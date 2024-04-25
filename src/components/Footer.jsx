import Typography from "@mui/joy/Typography";
import Constants from "../utils/Constants";

function Footer() {
	return (
		<Typography color="neutral" level="body-xs" sx={{ fontStyle: "italic" }}>
			An{" "}
			<a href="https://github.com/anushibin007" target="_blank">
				anushibin007
			</a>{" "}
			Side Project // Contribute on{" "}
			<a href="https://github.com/anushibin007/room-inator" target="_blank">
				GitHub
			</a>{" "}
			// Version: {Constants.BUILD_NUMBER}
		</Typography>
	);
}

export default Footer;
