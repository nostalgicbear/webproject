const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
    console.log('Client has connected');

    ws.on('message', data => {
        console.log(`Client has sent us: ${data}`);

        //convert data to string 
        data = data.toString();
        
        //wait 5 seconds
        setTimeout(function () {
            ws.send(data.toUpperCase());
        }, 5000);
        
    });




    ws.on('close', message => {
        console.log("Client has disconnected");
    });
});