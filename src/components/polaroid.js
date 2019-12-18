import React from 'react'

const Polaroid =(props)=>{
    return(
        <div className='polaroid'>
            <div className='polaroid-content'
                style={{backgroundImage: 'url('+ props.img +')'}}></div>
        </div>
    )
}

class PolaroidWidget extends React.Component{
    state = {
        cards: [],
        current: 0
    }

    componentDidMount(){
        setTimeout(this.cycleCards, 10)
    }

    cycleCards =() =>{
        // if no cards, add the first from image list
        // cycle through images until complete
        // this.state.cards is the active card hand
        // this.props.images is the deck from which the hand is drawn
        // when a hand has as many cards as the deck, it returns the first card
        // the deck gives it the first card
        // if the hand has fewer cards than the deck, the deck gives the hand 
        // the next card

        let newCards = [...this.state.cards]
        let current = this.state.current
        if(this.state.current == this.props.images.length - 1){
            current = 0
            newCards.splice(0,1)
        }else{
            current = current + 1
        }
        newCards.push(this.props.images[current])
        console.log('current ', current)
        console.log(newCards)
        this.setState({
            cards: newCards,
            current: current
        }, () =>{setTimeout(this.cycleCards, 3000)})
        
    }

    render(){
        const styles = {
            minHeight:'400px',
            position: 'relative'
        }
        return(
            <div style={styles}>
                {this.state.cards.map((src) =><Polaroid img={src} />)}
            </div>
        )
    }
}


export default PolaroidWidget