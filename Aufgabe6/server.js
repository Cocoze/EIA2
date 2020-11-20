"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hexenkessel6 = void 0;
const Http = require("http");
const Url = require("url");
var Hexenkessel6;
(function (Hexenkessel6) {
    let server = Http.createServer();
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    console.log("server starting on poort: " + port);
    server.listen(port);
    server.addListener("request", handleRequest);
    function handleRequest(_request, _response) {
        _response.setHeader("content-type", "text/htmls; charset-utf - 8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");
            }
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
        }
        _response.write("my response");
        _response.end();
    }
})(Hexenkessel6 = exports.Hexenkessel6 || (exports.Hexenkessel6 = {}));
//# sourceMappingURL=server.js.map