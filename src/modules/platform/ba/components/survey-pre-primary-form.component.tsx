import { Form, Button } from "react-bootstrap";
import { Typography } from "../../../core";

const SurveyPrePrimaryForm = ({
    handleSubmit,
    data,
    formData,
    handleChange,
}: any) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Typography
                className="ba-form-heading"
                element={`${data?.campaigns}`}
            />
            <Form.Group controlId="formBasicName">
                <Form.Label>Participant Name</Form.Label>
                <Form.Control
                    type="text"
                    name="participant_name"
                    placeholder="Enter participant name"
                    value={formData.participant_name}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="formBasicPhone">
                <Form.Label>Participant Phone</Form.Label>
                <Form.Control
                    type="text"
                    name="participant_phone"
                    placeholder="Enter participant phone"
                    value={formData.participant_phone}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="formBasicAge">
                <Form.Label>Age</Form.Label>
                <Form.Control
                    type="text"
                    name="age"
                    placeholder="Enter age"
                    value={formData.age}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="formBasicProfession">
                <Form.Label>Profession</Form.Label>
                <Form.Control
                    type="text"
                    name="profession"
                    placeholder="Enter profession"
                    value={formData.profession}
                    onChange={handleChange}
                />
            </Form.Group>

            <Button className="mt-2" variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default SurveyPrePrimaryForm;
