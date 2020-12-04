"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hexenkessel7 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Hexenkessel7;
(function (Hexenkessel7) {
    let orders;
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    //let databaseUrl: string = "mongodb://localhost:27017";
    //let dbpassword: string = "S4AegjBzTxjIIT3r";
    //let databaseUrl: string = "mongodb+srv://cocosatlas:" + dbpassword + "@eia2.lsydz.mongodb.net/Hexenkessel7";
    let databaseUrl = "mongodb+srv://snape:snapi@eia2.lsydz.mongodb.net/Hexenkessel7?retryWrites=true&w=majority";
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        let server = Http.createServer();
        //console.log("server");  
        console.log("server starting on port: " + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Hexenkessel7").collection("Orders");
        console.log("Database connection ", orders != undefined);
    }
    function handleRequest(_request, _response) {
        console.log("what´s up?");
        _response.setHeader("content-type", "text/htmls; charset-utf - 8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            console.log("hallo");
            let url = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");
            }
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
            saveOrder(url.query);
        }
        _response.end();
    }
    function saveOrder(_order) {
        orders.insertOne(_order);
    }
})(Hexenkessel7 = exports.Hexenkessel7 || (exports.Hexenkessel7 = {}));
//# sourceMappingURL=server7.js.map