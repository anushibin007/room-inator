import Typography from "@mui/joy/Typography";
import Constants from "../utils/Constants";
import Spacer from "./Spacer";

function Footer() {
	return (
		<>
			<Spacer spacerForClass="footer" />
			<div className="footer">
				<Typography color="neutral" level="body-xs" sx={{ fontStyle: "italic" }}>
					A side project by{" "}
					<a href="https://www.linkedin.com/in/anushibinj/" target="_blank">
						Shibin
					</a>
					{" & "}
					<a href="https://www.linkedin.com/in/divyamahankali29/" target="_blank">
						Divya
					</a>{" "}
					// Contribute on{" "}
					<a href="https://github.com/anushibin007/room-inator" target="_blank">
						GitHub
					</a>{" "}
					// Version: {Constants.BUILD_NUMBER}
				</Typography>
			</div>
		</>
	);
}

export default Footer;
