// React
import { useState } from "react";
// Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import RoomDetails from "./RoomDetails";

function SearchResults({ rooms , darkMode}) {
	/**
	 * State of the visibility of the Modal
	 */
	const [modalShow, setModalShow] = useState(false);

	/**
	 * State of the room that needs to be shown in the Modal
	 */
	const [roomForModal, setRoomForModal] = useState({});

	/**
	 * Function to show the Modal
	 * @param {*} aRoom The room whose detail needs to be shown in the Modal
	 * @param {*} e
	 */
	const showModal = (aRoom, e) => {
		console.log(aRoom);
		setModalShow(true);
		setRoomForModal(aRoom);
	};

	return (
		<>
			<Row className="gy-5 gx-5">
				{rooms.map((room) => (
					<Col key={room.id} md="auto" lg={6} xl={3} xxl={3}>
						<Card className={`app ${darkMode ? "darkModeCSS text-white" : ""}`} onClick={() => showModal(room)}>
							<Image src={`${room.i[0]}?random=${room.id}`} className="mx-4 my-4" />
							<Card.Body>
								<Card.Title className="mx-2 d-flex justify-content-center">{room.n}</Card.Title>
								<Card.Body className="mx-2 d-flex justify-content-center">
									<span className="material-symbols-outlined">location_on</span>{'  '}
									{room.l.substring(0, 3)}{'  '}
									<span className="material-symbols-outlined">apartment</span>{'  '}
									{room.b} {'  '}<span className="material-symbols-outlined">floor</span>{'  '}
									{room.f} {'  '}<span className="material-symbols-outlined">groups</span>{'  '}
									{room.s}
								</Card.Body>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
			<RoomDetails show={modalShow} onHide={() => setModalShow(false)} room={roomForModal} />
		</>
	);
}

export default SearchResults;
