var React = require('react'),
    ReactDOMServer = require('react-dom/server'),
    ajax = require('./app/scripts/src/ajaxReq.js'),
    HomePage = require('./app/scripts/src/HomePage.js');

ReactDOM.render(<HomePage blip={window.APP_PROPS}/>, document.getElementById('app'));
