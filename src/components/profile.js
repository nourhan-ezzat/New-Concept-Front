import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Logout } from '../actions/user-actions';

class Profile extends Component {
    handleLogout = e => {
        e.preventDefault();
        this.props.Logout();
    }

    render() {
        return(
            <div>
                <Link className='text-decoration-none w-25 btn btn-warning text-center text-white d-block mx-auto my-3' to='/' onClick={this.handleLogout}>
                    Log out
                </Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    errors: state.errors
})

export default connect(mapStateToProps, {Logout})(Profile)