import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class AcctInfo extends Component {
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

export default connect(mapStateToProps)(AcctInfo);