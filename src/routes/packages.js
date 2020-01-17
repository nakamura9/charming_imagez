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

                        <Card.Title><i class="fas fa-award  fa-2x  "></i> The Basics</Card.Title>
                        <ul>
                            <li> <i class="fa fa-camera" aria-hidden="true"></i> 1 Photographer (Bridal Preparations To
                                Ceremony)</li>
                            <li> <i class="fas fa-sd-card"></i> 300 Photos on flash disk</li>
                            <li> <i class="fas fa-file-image    "></i> 60 prints, postcard size</li>
                        </ul>
                        <h5><i class="fas fa-film  "></i> Videography</h5>
                        <ul>
                            <li> <i class="fas fa-video    "></i> 1 HD Video Camera</li>
                            <li> <i class="fas fa-file-video    "></i> 1 Flash Disk HD video</li>
                        </ul>
                    </Card.Body>
                </Card>
                <Card className='packages__shadow'>

                    <Card.Body>
                        <Card.Title> <i class="fas fa-medal  fa-2x  "></i> Gold Tier</Card.Title>
                        <ul>
                            <li><i class="fa fa-camera" aria-hidden="true"></i> 2 Photographers (Bride and Groom)</li>
                            <li> <i class="fas fa-sd-card"></i> 500 Photos on flash disk</li>
                            <li> <i class="fas fa-file-image    "></i> 100 prints, postcard size</li>
                            <li> <i class="fas fa-images    "></i> 2 A4 canvases</li>
                            <li> <i class="fas fa-portrait    "></i> 1 A3 canvases</li>
                            <li> <i class="fas fa-tshirt    "></i>Pre-wedding shoot with complementary T-shirts</li>
                        </ul>
                        <h5> <i class="fas fa-film   "></i> Videography</h5>
                        <ul>

                            <li> <i class="fas fa-video    "></i> 2 HD Video Cameras</li>
                            <li> <i class="fas fa-file-video    "></i> 1 Flash Disk HD video</li>


                        </ul>
                    </Card.Body>
                </Card>
                <Card className='packages__shadow'>

                    <Card.Body>
                        <Card.Title> <i class="fa fa-trophy fa-2x" aria-hidden="true"></i> Platinum Tier</Card.Title>
                        <ul>
                            <li><i class="fa fa-camera" aria-hidden="true"></i> 2 Photographers(Bride And Groom)</li>
                            <li> <i class="fas fa-sd-card"></i>500 Photos on flash disk</li>
                            <li> <i class="fas fa-file-image    "></i> 100 prints, postcard size</li>
                            <li> <i class="fas fa-images    "></i> 2 A4 canvases</li>
                            <li> <i class="fas fa-portrait    "></i> 1 A3 canvases</li>
                            <li> <i class="fas fa-tshirt    "></i> Pre-wedding shoot with complementary T-shirts</li>


                        </ul>
                        <h5> <i class="fas fa-film   "></i> Videography</h5>
                        <ul>
                            <li> <i class="fas fa-video    "></i> 2 HD Video Cameras</li>
                            <li> <i class="fas fa-file-video    "></i> 1 Flash Disk HD video</li>
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
                Events Photography</h1>
            <div className="packages__deck" >
                <Card className='packages__shadow' style={{width: "100%"}}>
                    <Card.Body>
                        <Card.Title>Lorem Ipsum</Card.Title>
                        <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Volutpat sed cras ornare arcu dui vivamus. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Neque viverra justo nec ultrices. Porttitor leo a diam sollicitudin tempor id eu. Sem integer vitae justo eget magna fermentum iaculis. Dolor sed viverra ipsum nunc aliquet bibendum enim. Vel fringilla est ullamcorper eget nulla. Nibh nisl condimentum id venenatis. Non pulvinar neque laoreet suspendisse interdum consectetur libero. Viverra ipsum nunc aliquet bibendum enim. At consectetur lorem donec massa sapien faucibus et molestie ac.

Turpis egestas maecenas pharetra convallis posuere morbi leo. Est lorem ipsum dolor sit amet. Aliquam malesuada bibendum arcu vitae elementum curabitur. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Facilisis mauris sit amet massa. Posuere lorem ipsum dolor sit amet consectetur. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Elementum eu facilisis sed odio morbi quis. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Euismod elementum nisi quis eleifend quam. Tempor orci eu lobortis elementum nibh tellus molestie nunc. Tempus quam pellentesque nec nam aliquam sem et. Et tortor at risus viverra adipiscing at in tellus integer. Feugiat vivamus at augue eget. Diam maecenas ultricies mi eget mauris pharetra et ultrices. Hac habitasse platea dictumst quisque sagittis. Risus commodo viverra maecenas accumsan lacus vel. At tempor commodo ullamcorper a lacus vestibulum sed arcu. Id eu nisl nunc mi ipsum faucibus vitae. A lacus vestibulum sed arcu non odio euismod lacinia.</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </div>
    <div className="row">
        <div class="col-12">
            <h1 style={{marginBottom: '1rem', marginTop: '1rem',fontFamily: 'AlexBrush',  fontSize: '5rem'}}>
                Family Photography</h1>
            <div className="packages__deck">
                <Card className='packages__shadow' style={{width: "100%"}}>
                    <Card.Body>
                        <Card.Title> Lorem Ipsum</Card.Title>
                        <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Volutpat sed cras ornare arcu dui vivamus. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Neque viverra justo nec ultrices. Porttitor leo a diam sollicitudin tempor id eu. Sem integer vitae justo eget magna fermentum iaculis. Dolor sed viverra ipsum nunc aliquet bibendum enim. Vel fringilla est ullamcorper eget nulla. Nibh nisl condimentum id venenatis. Non pulvinar neque laoreet suspendisse interdum consectetur libero. Viverra ipsum nunc aliquet bibendum enim. At consectetur lorem donec massa sapien faucibus et molestie ac.

Turpis egestas maecenas pharetra convallis posuere morbi leo. Est lorem ipsum dolor sit amet. Aliquam malesuada bibendum arcu vitae elementum curabitur. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Facilisis mauris sit amet massa. Posuere lorem ipsum dolor sit amet consectetur. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Elementum eu facilisis sed odio morbi quis. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Euismod elementum nisi quis eleifend quam. Tempor orci eu lobortis elementum nibh tellus molestie nunc. Tempus quam pellentesque nec nam aliquam sem et. Et tortor at risus viverra adipiscing at in tellus integer. Feugiat vivamus at augue eget. Diam maecenas ultricies mi eget mauris pharetra et ultrices. Hac habitasse platea dictumst quisque sagittis. Risus commodo viverra maecenas accumsan lacus vel. At tempor commodo ullamcorper a lacus vestibulum sed arcu. Id eu nisl nunc mi ipsum faucibus vitae. A lacus vestibulum sed arcu non odio euismod lacinia.</Card.Text>
                    </Card.Body>
                </Card>
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
                        <Card.Title> <i class="fas fa-images fa-2x    "></i> Photo Books</Card.Title>
                        <Card.Text>Photo books are glossy hardcover books that display your precious moment in a perfect
                            medium for sharing with friends and family.</Card.Text>
                        <h5>Configurations:</h5>
                        <ul>
                            <li> <i class="fa fa-check-square" aria-hidden="true"></i> A4 Photobook</li>
                        </ul>
                    </Card.Body>
                </Card>
                <Card className='packages__shadow'>
                    <Card.Body>
                        <Card.Title> <i class="fas fa-portrait  fa-2x  "></i> Canvas Portraits</Card.Title>
                        <Card.Text>Canvas Portraits utilize the textured surface of canvas to elevate your pictures to a
                            higher artform. Frame them and hang them on your walls to celebrate your finest moments!
                        </Card.Text>
                        <h5>Configurations:</h5>
                        <ul>
                            <li> <i class="fa fa-check-square" aria-hidden="true"></i> A4 Canvas</li>
                            <li> <i class="fa fa-check-square" aria-hidden="true"></i> A3 Canvas</li>
                        </ul>
                    </Card.Body>
                </Card>
                <Card className='packages__shadow'>
                    <Card.Body>
                        <Card.Title> <i class="fas fa-video fa-2x   "></i> Drone Footage</Card.Title>
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