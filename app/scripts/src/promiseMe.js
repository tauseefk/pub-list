module.exports = function(method, url) {
    return new Promise(function(resolve, reject) {

        var xhr = new XMLHttpRequest();

        xhr.open(method, url, true);
        xhr.onload = function() {
            if (xhr.status == 200) {
                resolve(xhr.response);
            } else {
                reject(xhr.statusText);
            }
        }

        xhr.onerror = function() {
            reject(Error("Could not fetch data"));
        }

        xhr.send();
    });
}
