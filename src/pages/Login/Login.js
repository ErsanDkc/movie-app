import { Formik } from 'formik';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import schema from './validations';
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate = useNavigate()
    return (
        <>
            <Formik

                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={schema}
                onSubmit={(values, action) => {
                    navigate("/home")
                }}
            >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                    <Form onSubmit={handleSubmit} style={{ height: "50vh" }} className='d-flex flex-column justify-content-center align-items-center'>
                        <h1 style={{marginBottom:"32px"}}>Login</h1>
                        <Form.Group style={{ width: "25%" }} className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            name='email' 
                            value={values.email} 
                            onChange={handleChange} 
                            isInvalid={errors.email && touched.email}
                            autoFocus 
                            />
                            
                            {errors.email && touched.email ? (
                                <div style={{ color: "red" }}>{errors.email}</div>
                            ) : (
                                ""
                            )}

                        </Form.Group>

                        <Form.Group style={{ width: "25%" }} className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name='password'
                                value={values.password}
                                onChange={handleChange}
                                isInvalid={errors.password && touched.password}
                            />

                            {errors.password && touched.password ? (
                                <div style={{ color: "red" }}>{errors.password}</div>
                            ) : (
                                ""
                            )}
                        </Form.Group>

                        <Button variant="primary" type="submit" className='fs-5'>
                            Login
                        </Button>
                    </Form>
                )}
            </Formik>

        </>
    )
}

export default Login