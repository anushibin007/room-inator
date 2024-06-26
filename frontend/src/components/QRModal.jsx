import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import QRCode from "react-qr-code";

export default function QRModal({ open, setOpen, qrData }) {
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
						<Typography level="title-lg">Share via QR</Typography>
					</DialogTitle>
					<DialogContent>
						<Grid
							container
							direction="row"
							justifyContent="space-between"
							alignItems="center"
							width="100%"
							sx={{ padding: 3 }}
						>
							<Grid>
								<QRCode value={qrData ?? "No input data"} />
							</Grid>
						</Grid>
					</DialogContent>
				</ModalDialog>
			</Modal>
		</React.Fragment>
	);
}
