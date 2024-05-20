import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import { Grid, List, ListItem, Typography, Link } from "@mui/joy";

export default function AboutUs({ open, setOpen }) {
	return (
		<React.Fragment>
			<Modal
				aria-labelledby="modal-title"
				aria-describedby="modal-desc"
				open={open}
				onClose={() => setOpen(false)}
				sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
			>
				<ModalDialog>
					<ModalClose variant="plain" sx={{ m: 1 }} />
					<DialogTitle>
						<Typography level="title-lg">About us</Typography>
					</DialogTitle>
					<DialogContent>
						<Grid container>
							<Grid xs={12} mt={2}>
								<Typography level="title-md">Inception</Typography>
							</Grid>
							<Grid xs={12}>
								<List>
									<ListItem>
										<Link
											href="https://www.linkedin.com/in/anushibinj/"
											target="_blank"
											underline="always"
										>
											<Typography level="body-md">
												Anu Shibin Joseph Raj
											</Typography>
										</Link>
									</ListItem>
								</List>
							</Grid>
						</Grid>
						<Grid container>
							<Grid xs={12}>
								<Typography level="title-md">Contribution</Typography>
							</Grid>
							<Grid xs={12}>
								<List>
									<ListItem>
										<Link
											href="https://www.linkedin.com/in/divyamahankali29/"
											target="_blank"
											underline="always"
										>
											<Typography level="body-md">Divya Mahankali</Typography>
										</Link>{" "}
										- Backend
									</ListItem>
								</List>
							</Grid>
						</Grid>
						<Grid container>
							<Grid xs={12}>
								<Typography color="neutral" level="body-sm">
									Contribute on{" "}
									<Link
										href="https://github.com/anushibin007/room-inator"
										target="_blank"
										underline="always"
									>
										GitHub
									</Link>
								</Typography>
							</Grid>
						</Grid>
					</DialogContent>
				</ModalDialog>
			</Modal>
		</React.Fragment>
	);
}
