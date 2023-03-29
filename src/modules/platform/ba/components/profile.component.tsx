import Modal from "react-modal";
import { ModButton, svgIcon } from "../../../core";
import { customStyles } from "../../admin/admin.style";
import { Card, Col, ListGroup } from "react-bootstrap";
import { useState } from "react";
import useDashBoardHook from "../hooks/useDashBoardHook";
Modal.setAppElement("#root");

function Profile() {
    const [profileOpen, setProfileOpen] = useState(false);
    const { data, loading, error } = useDashBoardHook();
    const Impression = data?.Impression;
    const area = data?.area;
    const campaigns = data?.campaigns;
    const contact = data?.contact;
    const region = data?.region;
    const teritorry = data?.teritorry;
    const username = data?.username;

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <button className="btn btn-success ">{`CS ${Impression}`}</button>
            <ModButton
                element={svgIcon.profile}
                event={() => setProfileOpen(true)}
                className="btn btn-primary mr-2 ms-2 bg-dark border-0"
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
                <div className="text-center">{svgIcon.user}</div>
                {/* <Col className="col-md-12 col-lg-4 ms-auto me-auto mt-5 p-5"> */}
                <Card className="ms-3 me-3 mt-2">
                    <Card.Body>
                        <Card.Title>{username}</Card.Title>
                        <Card.Text>{area}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                            <strong>Count:</strong> {Impression || 0}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Campaigns:</strong> {campaigns}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Contacts:</strong> {contact}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Region:</strong> {region}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Territory:</strong> {teritorry}
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
                {/* </Col> */}
            </Modal>
        </div>
    );
}

export default Profile;
