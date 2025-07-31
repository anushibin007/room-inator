import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import CardContent from "@mui/joy/CardContent";
import NonOverflowingTypography from "./NonOverflowingTypography";
import { buildImageSrcUrl } from "../../utils/URLHelper";
import Constants from "../../utils/Constants";
import Chip from "@mui/joy/Chip";
import Button from "@mui/joy/Button";
import { Link, Box, Stack } from "@mui/joy";
import MeetingRoomAvailability from "../MeetingRoomAvailability";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PeopleIcon from "@mui/icons-material/People";
import { useState } from "react";

export default function RoomCard({ room }) {
	const [isHovered, setIsHovered] = useState(false);

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
		<Card 
			sx={{ 
				maxWidth: "100%", 
				height: "100%",
				boxShadow: isHovered ? "0 20px 40px rgba(0,0,0,0.15)" : "0 8px 24px rgba(0,0,0,0.08)",
				transform: isHovered ? "translateY(-8px)" : "translateY(0)",
				transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
				borderRadius: "16px",
				overflow: "hidden",
				background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
				border: "1px solid rgba(0,0,0,0.04)",
				cursor: "pointer",
				position: "relative",
				"&::before": {
					content: '""',
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					height: "4px",
					background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
					opacity: isHovered ? 1 : 0,
					transition: "opacity 0.3s ease"
				}
			}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<CardOverflow>
				<AspectRatio
					ratio="16/10"
					sx={{
						minWidth: 280,
						position: "relative",
						"&::after": {
							content: '""',
							position: "absolute",
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							background: isHovered ? "rgba(0,0,0,0.1)" : "transparent",
							transition: "background 0.3s ease"
						}
					}}
				>
					<Link overlay href={`#room/${room.id}`}>
						<img 
							src={getImageUrl()} 
							loading="lazy" 
							alt={`Image of ${room.name}`}
							style={{
								objectFit: "cover",
								transform: isHovered ? "scale(1.05)" : "scale(1)",
								transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
							}}
						/>
					</Link>
					<Box
						sx={{
							position: "absolute",
							top: 12,
							right: 12,
							zIndex: 2
						}}
					>
						<MeetingRoomAvailability roomAvailability={room?.roomAvailability} />
					</Box>
				</AspectRatio>
			</CardOverflow>
			
			<CardContent sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column" }}>
				<Stack spacing={2} sx={{ flexGrow: 1 }}>
					<Box>
						<Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
							<LocationOnIcon sx={{ fontSize: 16, color: "text.secondary" }} />
							<NonOverflowingTypography 
								level="body-xs" 
								sx={{ 
									color: "text.secondary",
									fontWeight: 500,
									textTransform: "uppercase",
									letterSpacing: "0.5px"
								}}
							>
								Floor {room?.floor}
							</NonOverflowingTypography>
						</Stack>
						
						<NonOverflowingTypography
							level="title-lg"
							sx={{ 
								fontWeight: 700,
								fontSize: "1.25rem",
								lineHeight: 1.3,
								color: "text.primary",
								mb: 2
							}}
						>
							{room?.name}
						</NonOverflowingTypography>
					</Box>

					<Stack direction="row" alignItems="center" spacing={1}>
						<PeopleIcon sx={{ fontSize: 18, color: "text.secondary" }} />
						<Chip
							component="span"
							size="sm"
							variant="soft"
							color={getSeatTagColor()}
							sx={{
								fontWeight: 600,
								borderRadius: "8px",
								px: 1.5,
								py: 0.5,
								fontSize: "0.75rem"
							}}
						>
							{room?.capacity} Seats
						</Chip>
					</Stack>

					{room?.stationery && room.stationery.length > 0 && (
						<Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 0.5 }}>
							{room.stationery.slice(0, 3).map((item, index) => (
								<Chip
									key={index}
									size="sm"
									variant="outlined"
									sx={{
										fontSize: "0.7rem",
										fontWeight: 500,
										borderRadius: "6px",
										borderColor: "divider",
										color: "text.secondary"
									}}
								>
									{item}
								</Chip>
							))}
						</Stack>
					)}
				</Stack>
			</CardContent>
			
			<CardOverflow>
				<Button
					as="a"
					href={`#room/${room?.id}`}
					variant="solid"
					size="lg"
					sx={{
						background: isHovered 
							? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
							: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
						borderRadius: 0,
						py: 1.5,
						fontSize: "0.95rem",
						fontWeight: 600,
						textTransform: "none",
						letterSpacing: "0.3px",
						transition: "all 0.3s ease",
						"&:hover": {
							background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
							transform: "none"
						}
					}}
				>
					View Details
				</Button>
			</CardOverflow>
		</Card>
	);
}