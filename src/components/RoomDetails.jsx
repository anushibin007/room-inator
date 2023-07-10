// Bootstrap
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function RoomDetails(props) {
	const room = props.room;
	return (
		<>
			{room && Object.keys(room).length > 0 && (
				<Modal {...props} size="lg" centered>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-vcenter">{room.n}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Row>
							<Col my={3} mx={3}>
								<Row>
									<Col>
										<h5>Country</h5>
									</Col>
									<Col>
										<p>{room.c}</p>
									</Col>
								</Row>
								<Row>
									<Col>
										<h5>Location</h5>
									</Col>
									<Col>
										<p>{room.l}</p>
									</Col>
								</Row>
								<Row>
									<Col>
										<h5>Building</h5>
									</Col>
									<Col>
										<p>{room.b}</p>
									</Col>
								</Row>
								<Row>
									<Col>
										<h5>Floor</h5>
									</Col>
									<Col>
										<p>{room.f}</p>
									</Col>
								</Row>
								<Row>
									<Col>
										<h5>Seating Capacity</h5>
									</Col>
									<Col>
										<p>{room.s}</p>
									</Col>
								</Row>
								<Row>
									<Col>
										<h5>White Board</h5>
									</Col>
									<Col>
										<p>{room.wb ? "✅" : "❌"}</p>
									</Col>
								</Row>
								<Row>
									<Col>
										<h5>Projector</h5>
									</Col>
									<Col>
										<p>{room.pr ? "✅" : "❌"}</p>
									</Col>
								</Row>
								<Row>
									<Col>
										<h5>Directions</h5>
									</Col>
								</Row>
								<Row>
									<Col>
										<Col>
											<ol dangerouslySetInnerHTML={{ __html: room.di }}></ol>
										</Col>
									</Col>
								</Row>
							</Col>
							<Col my={3} mx={3}>
								<Carousel>
									{room.i.map((anImageSrc, index) => (
										<Carousel.Item key={index}>
											<img
												className="d-block w-100"
												src={`${anImageSrc}?random=${index}`}
												alt="First slide"
											/>
										</Carousel.Item>
									))}
								</Carousel>
							</Col>
						</Row>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={props.onHide}>Close</Button>
					</Modal.Footer>
				</Modal>
			)}
		</>
	);
}

export default RoomDetails;
