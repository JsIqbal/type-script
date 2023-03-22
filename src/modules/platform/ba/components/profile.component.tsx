import { Card, Col, ListGroup } from "react-bootstrap";

function Profile() {
    return (
        <Col className="col-md-12 col-lg-4 ms-auto me-auto mt-5  p-5">
            <Card className="chart">
                <Card.Img
                    variant="top"
                    src="holder.js/100px180?text=Image cap"
                />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Profile;
