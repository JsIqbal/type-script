import { Col, Placeholder } from "react-bootstrap";
import useCreateSurvey from "../hooks/useCreateSurvey";
import SurveyForm from "./survey-primary-form.component";
import useDashBoardHook from "../hooks/useDashBoardHook";

function SurveyPrimary() {
    const { loading, error, formData, handleChange, handleSubmit } =
        useCreateSurvey();
    const { data } = useDashBoardHook();

    if (loading)
        return (
            // <div aria-hidden="true">
            //     <Placeholder xs={6} />
            // </div>
            <h1 className="text-center mt-5">Loading...</h1>
        );
    if (error) {
        return <div>{error}</div>;
    }
    return (
        <Col
            style={{ marginBottom: "43px" }}
            className="col-lg-6 ms-auto me-auto mt-5 card chart p-5 mb-5"
        >
            <SurveyForm
                data={data}
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </Col>
    );
}

export default SurveyPrimary;
