import React, { Component } from 'react'
import List from './List';
import Edit from './Edit';

class Users extends Component {
    state = {
        userName: ''
    };

    handleOnChange = ({ target: { value } }) => this.setState({ userName: value });

    render() {
        const { userName } = this.state;

        return (
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Edit userName={userName} handleOnChange={this.handleOnChange} />
                    </div>
                    <div className="one-half column">
                        <List userName={userName} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Users;
