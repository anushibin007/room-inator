import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import CardContent from "@mui/joy/CardContent";
import NonOverflowingTypography from "./NonOverflowingTypography";
import { buildImageSrcUrl } from "../../utils/URLHelper";
import Constants from "../../utils/Constants";
import Chip from "@mui/joy/Chip";
import Button from "@mui/joy/Button";
import { Link } from "@mui/joy";

export default function RoomCard({ room }) {
	const getImageUrl = () => {
		if (room?.images?.length > 0) {
			return buildImageSrcUrl(room.images[0]);
		}
		return `${Constants.IMAGE_PLACEHOLDER_URL}`;
	};
	const getSeatTagColor = () => {
		if (room?.capacity <= 6) {
			return "success";
		} else if (room?.capacity <= 12) {
			return "warning";
		} else {
			return "danger";
		}
	};
	return (
		<>
			<Card sx={{ maxWidth: "100%", boxShadow: "lg" }}>
				<CardOverflow>
					<AspectRatio
						sx={{
							minWidth: 200,
							borderBottom: 1,
							borderBottomStyle: "solid",
						}}
					>
						<Link overlay href={`#room/${room.id}`}>
							<img src={getImageUrl()} loading="lazy" alt={`Image of ${room.name}`} />
						</Link>
					</AspectRatio>
				</CardOverflow>
				<CardContent>
					<NonOverflowingTypography level="body-xs">
						Floor {room?.floor}
					</NonOverflowingTypography>
					<NonOverflowingTypography
						level="title-lg"
						sx={{ fontWeight: "xl" }}
						endDecorator={
							<Chip
								component="span"
								size="sm"
								variant="soft"
								color={getSeatTagColor()}
							>
								{room?.capacity} Seater
							</Chip>
						}
					>
						{room?.name}
					</NonOverflowingTypography>
				</CardContent>
				<CardOverflow>
					<Button
						as="a"
						href={`#room/${room?.id}`}
						variant="solid"
						color="primary"
						size="lg"
					>
						Visit
					</Button>
				</CardOverflow>
			</Card>
		</>
	);
}
