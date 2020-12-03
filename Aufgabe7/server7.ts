import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Hexenkessel7 {
    interface Order {
        [type: string]: string | string[];
    }
    let orders: Mongo.Collection;

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
        port = 5001;


    //let databaseUrl: string = "mongodb://localhost:27017";
    
    let dbpassword: string = "S4AegjBzTxjIIT3r";
    let databaseUrl: string = "mongodb+srv://cocosatlas:" + dbpassword + "@eia2.lsydz.mongodb.net/Hexenkessel7";

    startServer(port);
    connectToDatabase(databaseUrl);

    function startServer(_port: number | string): void {
        let server: Http.Server = Http.createServer();

        //console.log("server");  

        console.log("server starting on port: " + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Hexenkessel7").collection("Orders");
        console.log("Database connection ", orders != undefined);

    }
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("what´s up?");
        _response.setHeader("content-type", "text/htmls; charset-utf - 8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");
            }


            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);

            saveOrder(url.query);

        }

        _response.end();
    }
    function saveOrder(_order: Order): void {
        orders.insert(_order);

    }
}
