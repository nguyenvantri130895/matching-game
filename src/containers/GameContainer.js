import React, { Component } from 'react';
import '../App.scss'
import { connect } from 'react-redux'
import Card from '../components/Card'
import * as actions from '../actions'
//import { Redirect } from 'react-router-dom'

class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    check = (openedCards) => {
        this.props.onCheck(openedCards);
    }

    open = (index) => {
        this.props.onOpen(index);
    }

    componentWillMount = () => {
        this.props.onStart();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.cards) {
            let checkOpenedCards = nextProps.cards.filter((card) => {
                return card.opened === true && card.matched === false
            })
            if (checkOpenedCards.length === 2) {
                setTimeout(() => {
                    this.check(checkOpenedCards)
                }, 500)
            }
        }
        var matched = nextProps.cards.filter((card) => {
            return card.matched === true
        })

        if (matched.length) {
            if (matched.length === nextProps.cards.length) {
                this.props.onComplete();
            }
        }

        if (nextProps && !nextProps.complete && nextProps.cards.length === 0) {
            this.props.onStart();
        }
    }

    toNextLevel = () => {
        this.props.passLevel();
    }

    render() {
        var { cards, complete } = this.props;
        var renderCards = cards.map((card, index) => {
            return (
                <Card
                    key={index}
                    index={index}
                    card={card}
                    check={this.check}
                    open={this.open}
                >
                </Card>
            )
        })

        return (
            <div>
                <h4>Level {this.props.level}</h4>
                <h3>Score: {this.props.score}</h3>
                <div className="cards">
                    {renderCards}
                </div>
                {complete === true ?
                    <div className='win-box-visible'>
                        <div className="win-box">
                            <div className="win-box-title">Level Complete!!!</div>
                            <button className="btn win-box-button" onClick={this.toNextLevel}>Next Level</button>
                        </div>
                    </div> : ''
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cards: state.game.cards,
        score: state.game.score,
        level: state.game.level,
        complete: state.game.complete,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onStart: () => {
            dispatch(actions.start())
        },
        onOpen: (index) => {
            dispatch(actions.open(index))
        },
        onCheck: (openedCards) => {
            dispatch(actions.check(openedCards))
        },
        onComplete: () => {
            dispatch(actions.complete())
        },
        passLevel: () => {
            dispatch(actions.passLevel())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);