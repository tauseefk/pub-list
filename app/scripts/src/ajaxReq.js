function Ajax(params) {
    var xhr = new XMLHttpRequest(),
        method = params.method || "GET",
        url = params.url || "/",
        callback = params.callback || console.log;

    function init () {
        xhr.open(method, url, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                callback(xhr);
            }
        }
    };
    init();
    return xhr;
}

module.exports = Ajax;
