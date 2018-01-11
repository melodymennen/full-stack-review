import React, { Component } from 'react';
import { connect } from 'react-redux';


class AcctInfo extends Component {
    render() {
        const { user } = this.props;
        
        return (
            <div>
                <h1>AcctInfo</h1>
                <div>
                    You are logged in as: <strong>{ user.name }</strong>
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