import React from 'react';
import {Container, Row, Col, Form} from 'react-bootstrap'

const Filter = ({setEndpoint}) => {
    const handleFilter = (status) => {
        status === "All" ? setEndpoint("character") :
            setEndpoint("character/?status=" + status.toLowerCase()) 
    }
    return(
        <div>
            <Container>
                <Row className='justify-content-center my-5 text-center'>
                    <Col xs={8} md={7} lg={4}>
                    <Form>
                    <Form.Group>
                        <Form.Label htmlFor='status'>
                            Search by status:
                        </Form.Label>
                        <Form.Select id='status' onChange={(e)=> handleFilter(e.target.value) }>
                            <option>Alive</option>
                            <option>Dead</option>
                            <option>Unknown</option>
                            <option>All</option>
                        </Form.Select>
                    </Form.Group>
                    </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export { Filter }