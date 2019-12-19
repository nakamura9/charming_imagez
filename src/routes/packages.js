import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
const Packages =(props) =>{
return(
<CardDeck>
    <Card>
        <Card.Img variant='top' src='/static/images/carousel.PNG' />

        <Card.Body>

            <Card.Title>Wedding Photography</Card.Title>
            <Card.Text></Card.Text>
        </Card.Body>
    </Card>
    <Card>
        <Card.Img variant='top' src='/static/images/carousel.PNG' />

        <Card.Body>
            <Card.Title>Special Moments</Card.Title>
            <Card.Text></Card.Text>
        </Card.Body>
    </Card>
    <Card>
        <Card.Img variant='top' src='/static/images/carousel.PNG' />

        <Card.Body>
            <Card.Title>Corporate Events</Card.Title>
            <Card.Text></Card.Text>
        </Card.Body>
    </Card>
</CardDeck>
)
}

export default Packages