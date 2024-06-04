import React from "react";
import { CardCover, Skeleton } from "@mui/joy";

export default function SkeletonCardCover({ imgSrc }) {
	const [imageStillLoading, setImageStillLoading] = React.useState(true);

	return (
		<CardCover>
			<Skeleton variant="rectangular" animation="pulse" loading={imageStillLoading}>
				<img
					src={imgSrc}
					loading="lazy"
					onLoad={() => {
						setImageStillLoading(false);
					}}
				/>
			</Skeleton>
		</CardCover>
	);
}
