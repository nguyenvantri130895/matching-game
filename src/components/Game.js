import React, { Component } from 'react';
import '../App.scss'
import Card from './Card'

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        var { cards } = this.props;
        console.log(cards);
        var renderCards = cards.map((card, index) => {
            return (
                <Card
                    key={index}
                    index={index}
                    card={card}
                    id={card.id}
                    matched={card.matched}
                    flipped={card.flipped}
                >
                </Card>
            )
        })
        return (
            <div className="cards">
                {renderCards}
            </div>
        );
    }
}

export default Game
