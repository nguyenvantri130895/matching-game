import React, { Component } from 'react';
import '../App.scss'
//import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Card from '../components/Card'
import * as actions from '../actions'

class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    shuffle = (cards) => {
        let currentIndex = cards.length;
        let temporaryValue;
        let randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = cards[currentIndex];
            cards[currentIndex] = cards[randomIndex];
            cards[randomIndex] = temporaryValue;
        }
        return cards;
    }

    onClick = (index, id, opened, matched) => {
        console.log(id);
        this.props.onClick(index, id, opened, matched);
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
                    click={this.onClick}
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

const mapStateToProps = (state) => {
    return {
        cards: state.cards,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onClick: (index, id, opened, matched) => {
            dispatch(actions.flip(index, id, opened, matched))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);