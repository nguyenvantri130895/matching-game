import React, { Component } from 'react';
import '../App.scss'
//import { Link } from 'react-router-dom'

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: '',
            openedCards: [],
        }
    }

    onOpen = () => {
        var { card, index } = this.props;
        this.setState({
            opened: 'opened',
        })
        this.props.click(index, card.id, card.opened, card.matched)
    }

    render() {
        var { card, index } = this.props;
        console.log(card.matched)
        console.log(this.state.opened)
        return (
            // <div className={"card" + (card.opened ? ' opened' : '') + (card.matched ? ' matched' : '')}>
            <div
                className={"card" + card.opened === true ? ' opened' : ''}
                onClick={this.onOpen}
            >
                <div className="front">
                    <img
                        src="https://picsum.photos/156/236?image=501"
                        alt='alt'
                    />
                </div>
                <div className='back'>
                    <img
                        src={"https://picsum.photos/156/236?image=" + card.id}
                        alt='alt'
                    />
                </div>
            </div>
        );
    }
}

export default Game