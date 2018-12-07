console.log('HI');

var httpRequest;

if (window.XMLHttpRequest) { // Mozilla, Safari, ...
    httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}
var nameOfTheFunction = function () {
    if (httpRequest.readyState == 4) {
        // everything is good, the response is received
        if (httpRequest.status == 200) {
            // perfect!
            console.log(httpRequest.requestText);
            /*
            var requestText = document.getElementById("request-text");
            requestText.textContent=httpRequest.requestXML;
            */
        } else {
            // there was a problem with the request,
            // for example the response may be a 404 (Not Found)
            // or 500 (Internal Server Error) response codes
        }
    } else {
        // still not ready
    }
}
httpRequest.onreadystatechange = nameOfTheFunction;

httpRequest.open('GET', 'https://rsu-library-api.herokuapp.com/', true);
//httpRequest.send(null);



