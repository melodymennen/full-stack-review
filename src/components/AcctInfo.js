import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../ducks/reducer';
import axios from 'axios';


class AcctInfo extends Component {

    componentDidMount(){
        axios.get('/user-data').then(response => {
            if (response.data.user) {
                this.props.login(response.data.user)
            }
        })
    }


    render() {
        const { user } = this.props;

        return (
            <div>
                <h1>AcctInfo</h1>
                <div>
                    {user && <p>You are logged in as: <strong>{ user.name }</strong></p>}
                    {!user && <p>You must login! <Link to='/'>Login</Link></p>}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    login: login
}

export default connect(mapStateToProps, mapDispatchToProps)(AcctInfo);