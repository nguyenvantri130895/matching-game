import React, { Component } from 'react';
//import { Link } from 'react-router-dom'
import '../App.scss'
import {Link} from 'react-router-dom'
import randomstring from 'randomstring'
import { connect } from 'react-redux'
import * as actions from '../actions'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showScore: false
        }
    }

    // clickStart = () => {
    //     let key = randomstring.generate();
    //     console.log('key: ', key);
    //     localStorage.setItem('key', JSON.stringify(key));
    //     window.location.pathname = '/play'
    // }

    showScore = () => {
        this.props.onShowScore();
        console.log(this.props.highestScore)
        this.setState({
            showScore: true
        })
    }

    render() {
        return (
            <div className="background-home">
                <h2>MEMORY GAME</h2>
                <p>
                    <Link to="/play">
                        <button className="btn btn-home">Start</button>
                    </Link>
                    {/* <button className="btn btn-home" onClick={this.clickStart}>Start</button> */}

                </p>
                <p>
                    <button className="btn btn-home" onClick={this.showScore}>Highest Score</button>
                </p>
                {this.state.showScore === true ?
                    <div className='highest-score-box-visible'>
                        <div className="highest-score-box">
                            <div className="highest-score-box-title">Highest Score</div>
                            <div className="highest-score-box-content">{this.props.highestScore}</div>
                        </div>
                    </div> : ''
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        score: state.game.score,
        highestScore: state.game.highestScore,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onShowScore: () => {
            dispatch(actions.showScore())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);