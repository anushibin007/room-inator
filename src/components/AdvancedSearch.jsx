import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

export default function AdvancedSearch(props) {
	const { toggleModal, advancedSeachOpen } = props;
	return (
		<React.Fragment>
			<Modal
				aria-labelledby="modal-title"
				aria-describedby="modal-desc"
				open={advancedSeachOpen}
				onClose={toggleModal}
				sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
			>
				<Sheet
					variant="outlined"
					sx={{
						maxWidth: 500,
						borderRadius: "md",
						p: 5,
						boxShadow: "lg",
					}}
				>
					<ModalClose variant="plain" sx={{ m: 1 }} />
					<Typography
						component="h2"
						id="modal-title"
						level="h4"
						textColor="inherit"
						fontWeight="lg"
						mb={1}
					>
						Advanced Search
					</Typography>
					<Typography>Country</Typography>
					<Select defaultValue="India">
						<Option value="India">India</Option>
					</Select>
					<Typography>Location</Typography>
					<Select defaultValue="Bangalore">
						<Option value="Bangalore">Bangalore</Option>
						<Option value="Hyderabad">Hyderabad</Option>
					</Select>
					<Typography>Building</Typography>
					<Select defaultValue="B14">
						<Option value="B14">B14</Option>
						<Option value="H07">H07</Option>
					</Select>
					<Typography>Floor</Typography>
					<Select defaultValue="2">
						<Option value="2">2</Option>
						<Option value="3">3</Option>
						<Option value="4">4</Option>
					</Select>
				</Sheet>
			</Modal>
		</React.Fragment>
	);
}
