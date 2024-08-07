import { format, isBefore, isAfter } from "date-fns";
import { Chip, Tooltip } from "@mui/joy";
import { useEffect, useState } from "react";

const mockRoomAvailability = [
	{
		start: "2024-08-07T09:00:00",
		end: "2024-08-07T10:00:00",
	},
	{
		start: "2024-08-07T10:00:00",
		end: "2024-08-07T11:00:00",
	},
	{
		start: "2024-08-07T11:00:00",
		end: "2024-08-07T12:00:00",
	},
	{
		start: "2024-08-07T22:00:00",
		end: "2024-08-07T23:00:00",
	},
	{
		start: "2024-08-07T23:00:00",
		end: "2024-08-07T24:00:00",
	},
];

export default function MeetingRoomAvailability({ roomAvailability }) {
	const [message, setMessage] = useState({
		roomAvailable: false,
		text: "Loading",
	});

	useEffect(() => {
		const now = new Date();
		const availableSlots = roomAvailability?.map((slot) => ({
			start: new Date(slot.start),
			end: new Date(slot.end),
		}));

		if (!availableSlots) {
			setMessage({ roomAvailable: false, text: "No availableSlots data" });
			return;
		}

		if (availableSlots?.length === 0) {
			setMessage({ roomAvailable: false, text: "No free slots today" });
			return;
		}

		let isFreeNow = false;
		let nextSlot = null;

		for (let slot of availableSlots) {
			if (isBefore(now, slot.end) && isAfter(now, slot.start)) {
				isFreeNow = true;
				setMessage({
					roomAvailable: true,
					text: `Free from ${format(slot.start, "p")} to ${format(slot.end, "p")}`,
				});
				break;
			}
			if (isAfter(slot.start, now) && (!nextSlot || isBefore(slot.start, nextSlot.start))) {
				nextSlot = slot;
			}
		}

		if (!isFreeNow && nextSlot) {
			setMessage({ roomAvailable: false, text: `Busy until ${format(nextSlot.start, "p")}` });
		} else if (!isFreeNow) {
			setMessage({ roomAvailable: false, text: "No available slots today" });
		}
	}, [roomAvailability]);

	const getChipColor = () => {
		if (message.roomAvailable === true) {
			return "success";
		} else {
			return "danger";
		}
	};

	const getSlotsAsText = () => {
		const freeSlots = roomAvailability?.map((slot) => {
			return (
				<>
					{`${format(new Date(slot.start), "p")} - ${format(new Date(slot.end), "p")}`}
					<br />
				</>
			);
		});
		return (
			<>
				Free slots:
				<br />
				{freeSlots}
			</>
		);
	};

	return (
		<>
			{message.text != "No availableSlots data" && (
				// If there was no availableSlots data from the server, don't render this Chip
				<>
					<Tooltip title={getSlotsAsText()} variant="solid" placement="right">
						<Chip component="span" size="sm" variant="solid" color={getChipColor()}>
							{message.text}
						</Chip>
					</Tooltip>
				</>
			)}
		</>
	);
}
