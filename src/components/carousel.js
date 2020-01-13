import React from 'react'


class Carousel extends React.Component{
    state = {
        current: 0
    }

    constructor(props){
        super(props)
        this.animatable = React.createRef()
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
                    <div className="shutter-carousel-image">
                            {this.props.images.map((image, i) =>(
                                <img src={image} style={{
                                    display: i==this.state.current ? 'block' : 'none',
                                    zIndex: i
                                }}/>
                            ))}
                    </div>
                </div>
                
            </div>
        )
    }
}
// {React.Children.toArray(this.props.children)[this.state.current]}
export default Carousel