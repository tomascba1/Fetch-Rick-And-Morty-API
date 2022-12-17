import React from 'react';
import Card from 'react-bootstrap/Card'
import { Status } from '../Status';
import './Card.css'

const Cards = ({ ch }) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ch.image}/>
                <Card.Body>
                    <Card.Title>{ch.name}</Card.Title>
                    <Card.Text className='cardText'>
                        <Status status={ch.status}/>
                        <p>Specie: {ch.species}</p>
                        <p>Gender: {ch.gender}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export { Cards }