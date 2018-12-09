function getAndShowData(url, callback) {
    var httpRequest;
    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var getResponse = function () {
        if (httpRequest.readyState == 4) {
            if (httpRequest.status == 200) {
                try {
                    //console.log(httpRequest.responseText);
                    callback(JSON.parse(httpRequest.responseText));
                } catch (e) {
                    alert(e.message);
                }
            } else {
                alert('Не удалось получить данные: '+url);
            }
        }
    }
    httpRequest.onreadystatechange = getResponse;
    httpRequest.open('GET', url, true);
    httpRequest.send();
}
//'https://rsu-library-api.herokuapp.com/books'



/*
httpRequest.open('GET', 'https://rsu-library-api.herokuapp.com/static/images/nocover.jpg', true);
httpRequest.send();

httpRequest.open('GET', 'https://rsu-library-api.herokuapp.com/books', true);
httpRequest.send();
*/