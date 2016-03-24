var React = require('react'),
    promiseMe = require('../utils/promiseMe.js');
module.exports = React.createClass({
    displayName: 'exports',

    getInitialState: function () {
        return {
            users: this.props.users
        };
    },
    render: function () {
        return React.createElement(
            'div',
            { className: 'layoutSingleColumn' },
            React.createElement(UserSelect, { users: this.state.users })
        );
    }
});

var UserSelect = React.createClass({
    displayName: 'UserSelect',

    render: function () {
        var users = this.props.users.map(function (user, idx) {
            return React.createElement(
                'div',
                { key: idx },
                React.createElement(
                    'span',
                    { className: 'postContent--p' },
                    user.name
                )
            );
        });
        return React.createElement(
            'div',
            null,
            users
        );
    }
});
