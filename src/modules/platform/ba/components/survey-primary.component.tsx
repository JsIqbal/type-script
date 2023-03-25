import { Col, Placeholder } from "react-bootstrap";
import useDashBoardHook from "../hooks/useDashBoardHook";
import useCreateSurvey from "../hooks/useCreateSurvey";
import SurveyForm from "./survey-primary-form.component";

function SurveyPrimary() {
    const { data } = useDashBoardHook();

    const { loading, error, formData, handleChange, handleSubmit } =
        useCreateSurvey();

    if (loading)
        return (
            <div aria-hidden="true">
                <Placeholder xs={6} />
            </div>
        );
    if (error) return <div>{error}</div>;
    return (
        <Col
            style={{ marginBottom: "43px" }}
            className="col-lg-6 ms-auto me-auto mt-5 card chart p-5"
        >
            <SurveyForm
                handleSubmit={handleSubmit}
                data={data}
                formData={formData}
                handleChange={handleChange}
            />
        </Col>
    );
}

export default SurveyPrimary;
