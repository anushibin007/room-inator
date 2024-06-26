import Grid from "@mui/joy/Grid";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import StairsIcon from "@mui/icons-material/Stairs";
import PeopleIcon from "@mui/icons-material/People";
import NonOverflowingTypography from "./NonOverflowingTypography";
import { buildImageSrcUrl } from "../../utils/URLHelper";
import Constants from "../../utils/Constants";
import SkeletonCardCover from "./SkeletonCardCover";
import Link from "@mui/joy/Link";

export default function RoomCard({ room }) {
	return (
		<>
			<Card variant="outlined" sx={{ height: "250px", div: { cursor: "pointer" } }}>
				{room.images && (
					<>
						<SkeletonCardCover imgSrc={buildImageSrcUrl(room.images[0])} />
					</>
				)}
				{!room.images && (
					<>
						<CardCover>
							<img src={`${Constants.IMAGE_PLACEHOLDER_URL}`} loading="lazy" />
						</CardCover>
					</>
				)}
				<CardCover
					sx={{
						background:
							"linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
					}}
				/>
				<CardContent sx={{ justifyContent: "flex-end" }}>
					<Link overlay href={`#room/${room.id}`}>
						<Grid container xs={12}>
							<Grid xs={12}>
								<NonOverflowingTypography level="title-lg" textColor="#fff" mb={1}>
									{room.name}
								</NonOverflowingTypography>
							</Grid>
							<Grid xs={6}>
								<NonOverflowingTypography startDecorator={<StairsIcon />}>
									Floor {room.floor}
								</NonOverflowingTypography>
							</Grid>
							<Grid xs={6}>
								<NonOverflowingTypography
									startDecorator={<PeopleIcon />}
									textColor="neutral.300"
									mb={1}
								>
									Capacity {room.capacity}
								</NonOverflowingTypography>
							</Grid>
						</Grid>
					</Link>
				</CardContent>
			</Card>
		</>
	);
}
