var React = require('react'),
    ReactDOM = require('react-dom'),
    HomePage = require('./app/scripts/src/HomePage.js'),
    propsData = require('./app/scripts/src/propsData.js');

ReactDOM.render(<HomePage blip={propsData.blip}/>, document.getElementById('app'));
