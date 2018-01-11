import React, { Component } from 'react';
import logo from '../communityBank.svg';
import { connect } from 'react-redux';
import Auth0Lock from 'auth0-lock';
import axios from 'axios';
import './Home.css';

class Home extends Component {
    constructor(){
        super()

        this.state = {

        }

        this.login = this.login.bind(this);

        this.lock = null;
    }
    
    componentDidMount() {
        this.lock = new Auth0Lock(process.env.REACT_APP_AUTH0_CLIENT_ID, process.env.REACT_APP_AUTH0_DOMAIN)
        this.lock.on('authenticated', authResult => {
            this.lock.getUserInfo(authResult.accessToken, (error, user) => {
                axios.post('/login', {userId: user.sub}).then(response => {
                    this.props.login(response.data.user)
                    this.props.history.push('/private')
                })
            })
        })
    }

    login(){
        this.lock.show()
    }

    render() {

        return (
            <div className="home">
                <img className="logo" src={logo} alt="logo"/>
                <div className="actions">
                    <button onClick={this.login}>Login</button>
                </div>
            </div>
        );
    }
}

// function dispatchStateToProps(){
//     return {
//         user: 
//     }
// }

export default Home;
// export default connect(dispatchStateToProps)(Home);