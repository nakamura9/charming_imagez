import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import {ListGroup} from 'react-bootstrap'
const Packages =(props) =>{
return(

<div className="container-fluid">
    <div className="row">
        <div className="col-12">
            <h1 style={{marginBottom: '1rem', marginTop: '1rem',fontFamily: 'AlexBrush',  fontSize: '5rem'}}>Wedding
                Photography</h1>
            <div className="packages__deck">
                <Card className='packages__shadow'>

                    <Card.Body>

                        <Card.Title>The Basics</Card.Title>
                        <ListGroup>
                            <ListGroup.Item>Bridal Preparations To Ceremony(1 Photographer)</ListGroup.Item>
                            <ListGroup.Item>300 Photos on flash disk</ListGroup.Item>
                            <ListGroup.Item>60 prints, postcard size</ListGroup.Item>
                        </ListGroup>
                        <h5>Videography</h5>
                        <ListGroup>
                            <ListGroup.Item>1 HD Video Camera</ListGroup.Item>
                            <ListGroup.Item>1 Flash Disk HD video</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
                <Card className='packages__shadow'>

                    <Card.Body>
                        <Card.Title>Gold Tier</Card.Title>
                        <ListGroup>
                            <ListGroup.Item>Bride and Groom(2 Photographers)</ListGroup.Item>
                            <ListGroup.Item>500 Photos on flash disk</ListGroup.Item>
                            <ListGroup.Item>100 prints, postcard size</ListGroup.Item>
                            <ListGroup.Item>2 A4 canvases</ListGroup.Item>
                            <ListGroup.Item>1 A3 canvases</ListGroup.Item>
                            <ListGroup.Item>Pre-wedding shoot with complementary T-shirts</ListGroup.Item>
                        </ListGroup>
                        <h5>Videography</h5>
                        <ListGroup>

                            <ListGroup.Item>2 HD Video Cameras</ListGroup.Item>
                            <ListGroup.Item>1 Flash Disk HD video</ListGroup.Item>


                        </ListGroup>
                    </Card.Body>
                </Card>
                <Card className='packages__shadow'>

                    <Card.Body>
                        <Card.Title>Platinum Tier</Card.Title>
                        <ListGroup>
                            <ListGroup.Item>Bride And Groom(2 Photographers)</ListGroup.Item>
                            <ListGroup.Item>500 Photos on flash disk</ListGroup.Item>
                            <ListGroup.Item>100 prints, postcard size</ListGroup.Item>
                            <ListGroup.Item>2 A4 canvases</ListGroup.Item>
                            <ListGroup.Item>1 A3 canvases</ListGroup.Item>
                            <ListGroup.Item>Pre-wedding shoot with complementary T-shirts</ListGroup.Item>


                        </ListGroup>
                        <h5>Videography</h5>
                        <ListGroup>
                            <ListGroup.Item>2 HD Video Cameras</ListGroup.Item>
                            <ListGroup.Item>1 Flash Disk HD video</ListGroup.Item>
                            <ListGroup.Item>Drone Footage</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-12">
            <h1 style={{marginBottom: '1rem', marginTop: '1rem',fontFamily: 'AlexBrush',  fontSize: '5rem'}}>Corporate
                Events Photography</h1>
            <div class="row">
                <div class="col-12">
                    <h1 style={{marginBottom: '1rem', marginTop: '1rem',fontFamily: 'AlexBrush',  fontSize: '5rem'}}>
                        Family Photography</h1>

                </div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-12">
            <h1 style={{marginBottom: '1rem', marginTop: '1rem',fontFamily: 'AlexBrush',  fontSize: '5rem'}}>Add-Ons
            </h1>
            <p>Depending on the package selected, some features may be omitted. To customize your experience, you may
                request the following add-ons.</p>
            <div className='packages__deck'>
                <Card className='packages__shadow'>
                    <Card.Body>
                        <Card.Title>Photo Books</Card.Title>
                        <Card.Text>Photo books are glossy hardcover books that display your precious moment in a perfect
                            medium for sharing with friends and family.</Card.Text>
                        <h5>Available Configurations:</h5>
                        <ListGroup>
                            <ListGroup.Item>A4 Photobook</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
                <Card className='packages__shadow'>
                    <Card.Body>
                        <Card.Title>Canvas Portraits</Card.Title>
                        <Card.Text>Canvas Portraits utilize the textured surface of canvas to elevate your pictures to a
                            higher artform. Frame them and hang them on your walls to celebrate your finest moments!
                        </Card.Text>
                        <h5>Configurations:</h5>
                        <ListGroup>
                            <ListGroup.Item>A4 Canvas</ListGroup.Item>
                            <ListGroup.Item>A3 Canvas</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
                <Card className='packages__shadow'>
                    <Card.Body>
                        <Card.Title>Drone Footage</Card.Title>
                        <Card.Text>Experience your most precious moments from a whole new persepective. Professionally
                            shot and pilotted drone footage.</Card.Text>
                    </Card.Body>

                </Card>
            </div>
        </div>
    </div>
</div>
)
}

export default Packages