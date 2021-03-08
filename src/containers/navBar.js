import React from 'react';
import { connect } from 'react-redux';
import LoggedInBar from '../components/LoggedInBar';
import LoggedOutBar from '../components/LoggedOutBar';

class NavBar extends React.Component {

    componentDidMount() {
        this.props.getUserStatus(URL)
    };

    render() {
        return (
            <div>
                <h1 className="heading">Konjo Karate Club</h1>
                {(this.props.sessions.loggedIn) ? 
                    <LoggedInBar loggedIn={this.props.sessions.loggedIn} user={this.props.sessions.user} logoutUser={this.props.logoutUser} deleteUser={this.props.deleteUser} updateUser={this.props.updateUser} url={URL} /> : 
                    <LoggedOutBar />
                }
            </div>
        )
    }
    
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)