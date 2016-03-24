var React = require('react'),
    ReactDOM = require('react-dom'),
    HomePage = require('./Login.js'),
    propsData = require('json!../../../data/users.json');

ReactDOM.render(<HomePage users={propsData.users}/>, document.getElementById('app'));
