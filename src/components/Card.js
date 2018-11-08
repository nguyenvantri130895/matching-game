import React, { Component } from 'react';
import '../App.scss'

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    onOpen = () => {
        var { index } = this.props;
        this.props.open(index);
    }

    render() {
        var { card } = this.props;
        return (
            <div
                className={"card" + (card.opened ? ' opened' : '') + (card.matched ? ' matched' : '')}
            >
                <div className="front" onClick={this.onOpen}>
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