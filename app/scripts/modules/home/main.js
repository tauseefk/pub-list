var React = require('react'),
    ReactDOM = require('react-dom'),
    HomePage = require('./HomePage.js'),
    propsData = require('../utils/propsData.js');

ReactDOM.render(<HomePage blip={propsData.blip}/>, document.getElementById('app'));
