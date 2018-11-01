import React, { Component } from 'react';
//import { Link } from 'react-router-dom'
import '../App.scss'
import {Link} from 'react-router-dom'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <h2>MEMORY GAME</h2>
                <p>
                    <Link to="/play">
                        <button className="btn btn-home">Start</button>
                    </Link>
                </p>
                <p>
                    <button className="btn btn-home">High Score</button>
                </p>
            </div>
        );
    }
}

export default HomePage