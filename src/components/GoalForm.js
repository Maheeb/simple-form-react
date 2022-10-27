import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import {Col, Container, Row} from "react-bootstrap";
import {useState} from "react";
import AlertPopup from "./AlertPopup";
// import '../css/styles.css';

const initialValues = {
    name: "",
    age: "",

};

const GoalForm = (props) => {
    const [values, setValues] = useState(initialValues);
    const [error, setError] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });

    };

    const dataSubmit = (event) =>
    {
        event.preventDefault();

        if (values.age<=18)
        {
            setError(true);
        }
        else {

            setError(false);
            props.parentCallback(values)
        }

    }

    const closePopUp =() =>{
        setError(false)
    }


    return (
        <div>
            {error===true  &&  <AlertPopup handleClose={closePopUp}></AlertPopup>}
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className={'d-flex justify-content-center mt-2'}>

                        <Card style={{width: '40rem'}} >
                            <Card.Body>
                                <Form action={''} onSubmit={dataSubmit}>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="text" placeholder="Enter username" name="name" value={values.name}
                                                      onChange={handleInputChange}/>

                                    </Form.Group>
                                    <Form.Label>Age</Form.Label>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="text" placeholder="Enter age" name="age" value={values.age}
                                                      onChange={handleInputChange}/>

                                    </Form.Group>

                                    <Button variant="danger" type="submit" >
                                        Add User
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )


}

export default GoalForm;

