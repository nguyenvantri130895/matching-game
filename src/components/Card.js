import React, { Component } from 'react';
import '../App.scss'
//import { Link } from 'react-router-dom'

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardClass: 'card',
            images: ['dog', 'cat'],
        }
    }

    onFlip = () => {
        console.log(this.props.card.id);
        this.setState({
            cardClass: 'flipped'
        })
    }

    render() {
        var { card } = this.props;
        var { cardClass } = this.state;
        console.log(card);
        return (
            <div>
                <div className='card' onClick={this.onFlip}>
                    <img
                        src="/images/question1.png"
                        alt='alt'
                    />
                </div>
                {/* <div className='flipped'>
                    <img
                        src={'/images/' + this.props.images + '.jpg'}
                        alt='alt'
                    >
                    </img>
                </div> */}
            </div>
        );
    }
}

export default Game