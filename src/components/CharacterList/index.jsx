import React from 'react';
import { Cards } from '../Card';
import Row from 'react-bootstrap/Row'

const CharacterList = ({characterData}) => {
    return(
        <Row className='justify-content-evenly gap-3'>
            {characterData.map(ch => 
                <Cards ch={ch} key={ch.id}/>
            )}
        </Row>
    )
}

export { CharacterList }