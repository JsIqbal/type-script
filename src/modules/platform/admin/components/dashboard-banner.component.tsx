import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import useCampaignData from "../hooks/useCampaignData";

function Banner(): JSX.Element {
    const { data } = useCampaignData();
    const campaignReport = data?.campaignReport;
    const userReport = data?.userReport;
    return (
        <Container className="text-dark">
            <Row className="justify-content-around">
                <Col
                    sm
                    className="text-center bg-light rounded py-3 my-3 mx-4 card chart"
                >
                    {`BA - ${userReport?.total_ba || 0}`}
                </Col>
            </Row>
            <Row className="justify-content-around">
                <Col
                    sm
                    className="text-center bg-light rounded py-3 my-3 mx-4 card chart"
                >
                    {`Campaign - ${campaignReport?.total_campaign || 0}`}
                </Col>
            </Row>
            <Row className="justify-content-around">
                <Col
                    sm
                    className="text-center bg-light rounded py-3 my-3 mx-4 card chart"
                >
                    {`Impression - ${campaignReport?.total_impression || 0}`}
                </Col>
            </Row>
        </Container>
    );
}

export default Banner;
