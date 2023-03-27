import Modal from "react-modal";
import { ModButton, svgIcon } from "../../../core";
import { customStyles } from "../../admin/admin.style";
import { Card, Col, ListGroup } from "react-bootstrap";
import { useState } from "react";
Modal.setAppElement("#root");

function Profile() {
    const [profileOpen, setProfileOpen] = useState(false);
    return (
        <div>
            <ModButton
                element={svgIcon.profile}
                event={() => setProfileOpen(true)}
                className="btn btn-primary mr-2 ms-2"
            />
            <Modal
                style={customStyles}
                isOpen={profileOpen}
                onRequestClose={() => setProfileOpen(false)}
            >
                <button
                    className="payment-modal__close-btn"
                    onClick={() => setProfileOpen(false)}
                >
                    <span>&times;</span>
                </button>
                <Col className="col-md-12 col-lg-4 ms-auto me-auto mt-5  p-5">
                    <Card className="chart">
                        <Card.Img
                            variant="top"
                            src="holder.js/100px180?text=Image cap"
                        />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>
                                Dapibus ac facilisis in
                            </ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Modal>
        </div>
    );
}

export default Profile;
