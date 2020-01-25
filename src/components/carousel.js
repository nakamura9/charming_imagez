import React from 'react'


class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.animatable = React.createRef()

        this.state = {
            current:0
        }
    }


    //takes images as a list of children
    componentDidMount() {
        
        setTimeout(this.rotateCarousel, 5000)
    }

    rotateCarousel = () =>{
       
        if(this.state.current < this.props.images.length -1){
            this.setState((prevState) =>({current: prevState.current + 1}), () =>{
                
                setTimeout(this.rotateCarousel, 7500)
            })
        }else{
            this.setState({current: 0}, ()=>{
                
                setTimeout(this.rotateCarousel, 7500)
            })
        }
        
    }


    render(){
        return(
            <div>
                <div className="shutter-carousel">
                    <div className="shutter-carousel-image shutter-animation">
                    {this.props.images.map((img, i) =>(
                        <img key={i} src={img} alt="charming-imagez wedding picture" 
                            style={{display: this.state.current == i ?'block'
                                                : 'none'}}
                                                />))} 
                    </div>
                </div>
                
            </div>
        )
    }
}
// {this.props.images.map((img, i) =>(
//     <img src={img} 
//          className='shutter-carousel-image'
//          />
//     ))}
// {React.Children.toArray(this.props.children)[this.state.current]}
export default Carousel