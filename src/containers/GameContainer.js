import React, { Component } from 'react';
import '../App.scss'
//import { Link } from 'react-router-dom'
import Game from '../components/Game'
import { connect } from 'react-redux'

class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        var { cards } = this.props;
        return (
            <Game cards={cards} />
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);