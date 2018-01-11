import React, { Component } from 'react';
import logo from '../communityBank.svg';
import './Home.css';

class Home extends Component {
    // constructor(){
    //     super()

    // login(){

    // }
    // }

    render() {
        return (
            <div className="home">
                <img className="logo" src={logo} />
                <div className="actions">
                    <button onClick={this.login}>Login</button>
                </div>
            </div>
        );
    }
}

export default Home;