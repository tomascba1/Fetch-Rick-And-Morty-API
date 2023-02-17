import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import './Filter.css'

const Filter = ({setEndpoint}) => {
        // const handleStatus = (status) => {
        //     status === "All" ? setEndpoint("character") :
        //     setEndpoint("character/?status=" + status.toLowerCase())
        // }
        function handleFilters(e) {
            e.preventDefault()
            let query = "character/?"
            const data = new FormData(e.target);
            const status = data.get("status");
            const gender = data.get("gender");
            const name = data.get("name");
            if(status !== "All") query += `status=${status.toLowerCase()}&`
            if(gender !== "All") query += `gender=${gender.toLowerCase()}&`
            if(name) query += `name=${name.toLowerCase()}`
            setEndpoint(query)
        }
        const handleReset = () => {
            setEndpoint("character")
        }
    return(
        <div>
            <Container>
                <Row className='justify-content-center my-5 text-center'>
                    <Col xs={7} md={10} lg={10}>
                    <Form onSubmit={(e) => handleFilters(e)}>
                    <Form.Group className='filterForm'>
                        <Form.Label htmlFor='status'>
                            Search by status:
                        <Form.Select id='status' name='status'>
                            <option>All</option>
                            <option>Alive</option>
                            <option>Dead</option>
                            <option>Unknown</option>
                        </Form.Select>
                        </Form.Label>
                        <Form.Label htmlFor='gender'>
                            Search by Gender:
                        <Form.Select id='gender' name='gender'>
                            <option>All</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Genderless</option>
                            <option>Unknown</option>
                        </Form.Select>
                        </Form.Label>
                        <Form.Label htmlFor='name'>
                            Search by Name:
                        <Form.Control id='name' name='name'/>
                        </Form.Label>
                    </Form.Group>
                    <Form.Group className='m-3 filterBtn'>
                        <Button type="submit" variant='primary'>Filter</Button>
                        <Button type="reset" variant='danger' onClick={handleReset}>Reset Filters</Button>
                    </Form.Group>
                    </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export { Filter }