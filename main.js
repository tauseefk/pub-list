var React = require('react'),
    ReactDOMServer = require('react-dom/server'),
    HomePage = require('./app/scripts/src/HomePage.js');

ReactDOM.render(<HomePage />, document.getElementById('app'));
