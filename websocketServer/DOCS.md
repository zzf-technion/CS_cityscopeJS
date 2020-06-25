# Web socket server

This server listens to grid updates while 'brushing' edit events occur.

## Install & run

-   install
    `$ npm install`

-   Run the server with hot-module update
    `nodemon server.js`

## simple client example

```
const payload = () => {
    let rnd = Math.random();
    let p = { id: ioClient.id, pos: [rnd, rnd, rnd] };
    return p;
};

const io = require("socket.io-client");
ioClient = io.connect("http://__IP_HERE__:8080/");

ioClient.on("welcome", (socket) => {
    // sending to the client
    console.log(socket);
    //send 100 random data samples
    for (let i = 0; i < 100; i++) {
        let pos = payload();
        ioClient.emit("position", pos);
    }
});
```
