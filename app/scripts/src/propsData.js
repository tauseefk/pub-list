var http = require('http');
var props = (function() {
    return  {
        blip: "May with you, be the props!!"
    }

    // return function() {
    //     http.get('http://localhost:3000/counter')
    //     .end(function(res, blah) {
    //             return res.data;
    //     })
    // };
})();

module.exports = props;
