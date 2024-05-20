// MUI
import Alert from "@mui/joy/Alert";
import Typography from "@mui/joy/Typography";
import { Grid, Table } from "@mui/joy";

function ErrorMessage({ errorState }) {
	return (
		<>
			<Alert variant="solid" color="danger">
				<Grid container>
					<Grid xs={12}>
						<Typography level="h3" color="white">
							Sorry, an error occured.
						</Typography>
					</Grid>
					{errorState.error && (
						<>
							<Grid xs={12}>
								<Typography level="h4" mt={1} color="white">
									Error message
								</Typography>
							</Grid>
							<Grid xs={12}>
								<Typography level="body-sm" color="white">
									{errorState.error.message}
								</Typography>
							</Grid>
						</>
					)}
					<Grid xs={12}>
						<Typography level="h4" mt={1} color="white">
							Troubleshoot
						</Typography>
					</Grid>
					<Grid xs={12}>
						<Table
							sx={{ color: "white", "--TableCell-headBackground": "none" }}
							borderAxis="none"
						>
							<thead>
								<tr>
									<th style={{ color: "white", width: "10%" }}>Error</th>
									<th style={{ color: "white", width: "30%" }}>
										Potential cause(s)
									</th>
									<th style={{ color: "white", width: "30%" }}>
										Potential solution(s)
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Failed to fetch</td>
									<td>
										<ul>
											<li>You do not have access to the backend server</li>
											<li>The backend server might be down</li>
										</ul>
									</td>
									<td>
										<ul>
											<li>Connect to a VPN and try again</li>
											<li>Contact the administrator</li>
										</ul>
									</td>
								</tr>
								<tr>
									<td>Cannot read properties of undefined</td>
									<td>
										<ul>
											<li>
												There is a mismatch between the backend and frontend
												service versions
											</li>
											<li>
												The backend returned an error that the frontend
												couldn't parse
											</li>
										</ul>
									</td>
									<td>
										<ul>
											<li>Clear the browser cache and refresh the website</li>
											<li>Contact the administrator</li>
										</ul>
									</td>
								</tr>
							</tbody>
						</Table>
					</Grid>
				</Grid>
			</Alert>
		</>
	);
}

export default ErrorMessage;
