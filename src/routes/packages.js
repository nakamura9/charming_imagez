import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import {ul} from 'react-bootstrap'
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

                        <Card.Title><i className="fas fa-award  fa-2x  "></i> The Basics</Card.Title>
                        <ul>
                            <li> <i className="fa fa-camera" aria-hidden="true"></i> 1 Photographer (Bridal Preparations To
                                Ceremony)</li>
                            <li> <i className="fas fa-sd-card"></i> 300 Photos on flash disk</li>
                            <li> <i className="fas fa-file-image    "></i> 60 prints, postcard size</li>
                        </ul>
                        <h5><i className="fas fa-film  "></i> Videography</h5>
                        <ul>
                            <li> <i className="fas fa-video    "></i> 2 HD Video Cameras</li>
                            <li> <i className="fas fa-file-video    "></i> 1 Flash Disk HD video</li>
                        </ul>
                    </Card.Body>
                </Card>
                <Card className='packages__shadow'>

                    <Card.Body>
                        <Card.Title> <i className="fas fa-medal  fa-2x  "></i> Gold Tier</Card.Title>
                        <ul>
                            <li><i className="fa fa-camera" aria-hidden="true"></i> 2 Photographers (Bride and Groom)</li>
                            <li> <i className="fas fa-sd-card"></i> 500 Photos on flash disk</li>
                            <li> <i class="fa fa-book" aria-hidden="true"></i> A4 Photo book</li>
                            <li> <i className="fas fa-portrait    "></i> 3 * A3 canvases</li>
                            <li> <i className="fas fa-tshirt    "></i>Pre-wedding shoot with complementary T-shirts</li>
                        </ul>
                        <h5> <i className="fas fa-film   "></i> Videography</h5>
                        <ul>

                            <li> <i className="fas fa-video    "></i> 2 HD Video Cameras</li>
                            <li> <i className="fas fa-file-video    "></i> 1 Flash Disk HD video</li>


                        </ul>
                    </Card.Body>
                </Card>
                <Card className='packages__shadow'>

                    <Card.Body>
                        <Card.Title> <i className="fa fa-trophy fa-2x" aria-hidden="true"></i> Platinum Tier</Card.Title>
                        <ul>
                            <li><i className="fa fa-camera" aria-hidden="true"></i> 2 Photographers(Bride And Groom)</li>
                            <li> <i className="fas fa-sd-card"></i>500 Photos on flash disk</li>
                            <li> <i class="fa fa-book" aria-hidden="true"></i> A4 Photo book</li>
                            <li> <i className="fas fa-portrait    "></i> 3 * A3 canvases</li>
                            <li> <i className="fas fa-tshirt    "></i> Pre-wedding shoot with complementary T-shirts</li>


                        </ul>
                        <h5> <i className="fas fa-film   "></i> Videography</h5>
                        <ul>
                            <li> <i className="fas fa-video    "></i> 2 HD Video Cameras</li>
                            <li> <i className="fas fa-file-video    "></i> 1 Flash Disk HD video</li>
                            <li>Drone Footage</li>
                        </ul>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-12">
            <h1 style={{marginBottom: '1rem', marginTop: '1rem',fontFamily: 'AlexBrush',  fontSize: '5rem'}}>Corporate
                Events and Family Photography</h1>
            <div className="packages__deck" >
                <Card className='packages__shadow' >
                    <Card.Body>
                        <Card.Title className='icon-header'>
                            <i class="fas fa-user-tie fa-2x   "></i>
                            <i class="fa fa-briefcase fa-2x" aria-hidden="true"></i>
                            <i class="fas fa-certificate  fa-2x  "></i>
                        </Card.Title>
                        <Card.Title>Corporate Events Photography</Card.Title>
                        <Card.Text>Be it that product photo shoot, that well planned and well thought-out end of year function, that official opening or that annual event that is the highlight of your organisation's calendar, we are geared to be your solutions provider! 
                        </Card.Text>
                        <Card.Text>We will meet and exceed your media coverage needs.
                            !</Card.Text>
                        <Card.Text>Contact us today and let us work on your script!</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='packages__shadow' >
                    <Card.Body>
                    <Card.Title className='icon-header'>
                            <i class="fas fa-home fa-2x   "></i>
                            <i class="fa fa-baby fa-2x" aria-hidden="true"></i>
                            <i class="fas fa-glasses  fa-2x  "></i>
                        </Card.Title>
                        <Card.Title> Family Photography</Card.Title>
                        <Card.Text>Because we believe in the family unit, what better way to promote family bonds than with a Charming Family Photoshoot?
                        </Card.Text>
                                <Card.Text>We have the experience and passion for dealing with toddlers, teenagers, adults as well as the elderly.</Card.Text>
                                <Card.Text>Our promise to you is Family Photography With a Touch of Charm!!!</Card.Text>

                    </Card.Body>
                </Card>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-12">
            <h1 style={{marginBottom: '1rem', marginTop: '1rem',fontFamily: 'AlexBrush',  fontSize: '5rem'}}>Add-Ons
            </h1>
            <p style={{fontSize: '1.5rem'}}>Depending on the package selected, some features may be omitted. To customize your experience, you may
                request the following add-ons.</p>
            <div className='packages__deck'>
                <Card className='packages__shadow'>
                    <Card.Body>
                        <Card.Title> <i className="fas fa-images fa-2x    "></i> Photo Books</Card.Title>
                        <Card.Text>Photo books are glossy hardcover books that display your precious moment in a perfect
                            medium for sharing with friends and family.</Card.Text>
                        <h5>Configurations:</h5>
                        <ul>
                            <li> <i className="fa fa-check-square" aria-hidden="true"></i> A4 Photobook</li>
                            <li> <i className="fa fa-check-square" aria-hidden="true"></i> A3 Photobook</li>
                            <li> <i className="fa fa-check-square" aria-hidden="true"></i> Square Photobook</li>
                        </ul>
                    </Card.Body>
                </Card>
                <Card className='packages__shadow'>
                    <Card.Body>
                        <Card.Title> <i className="fas fa-portrait  fa-2x  "></i> Canvas Portraits</Card.Title>
                        <Card.Text>Canvas Portraits utilize the textured surface of canvas to elevate your pictures to a
                            higher artform. Frame them and hang them on your walls to celebrate your finest moments!
                        </Card.Text>
                        <h5>Configurations:</h5>
                        <ul>
                            <li> <i className="fa fa-check-square" aria-hidden="true"></i> A4 Canvas</li>
                            <li> <i className="fa fa-check-square" aria-hidden="true"></i> A3 Canvas</li>
                            <li> <i className="fa fa-check-square" aria-hidden="true"></i> A2 Canvas</li>
                            <li> <i className="fa fa-check-square" aria-hidden="true"></i> A0 Canvas</li>
                        </ul>
                    </Card.Body>
                </Card>
                <Card className='packages__shadow'>
                    <Card.Body>
                        <Card.Title> <i className="fas fa-video fa-2x   "></i> Drone Footage</Card.Title>
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