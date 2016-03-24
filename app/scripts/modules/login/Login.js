var React = require('react'),
    promiseMe = require('../utils/promiseMe.js');
module.exports = React.createClass({
    getInitialState: function() {
        return {
            users : this.props.users
        }
    },
    render: function() {
        return (
            <div className="layoutSingleColumn">
                <UserSelect users={this.state.users} />
            </div>
        )
    }
});

var UserSelect = React.createClass({
    render: function() {
        var users = this.props.users.map(function(user, idx) {
            return (
                <div key={idx}>
                    <span className="postContent--p">{user.name}</span>
                </div>
            )
        });
        return (
            <div>
                {users}
            </div>
        )
    }
});
