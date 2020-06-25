// ! Nodemon is a HMR tool for dev:
//  ! run: $ nodemon server.js

// #!/usr/bin/env nodejs
var http = require("http");
var io = require("socket.io")(http);
const server = io.listen(8080);

server.on("connection", function (socket) {
    // log the user that got connected
    console.log(socket.id, "connected...");
    // send a `welcome` note to user
    socket.emit("welcome", "connected to socket server..." + Date.now());
    // on roboscope connection
    socket.on("roboscopeSocket", function (grid) {
        // do somthing with the data from client
        console.log(grid);
    });
    socket.on("disconnect", () => {
        console.log(socket.id, "[!] disconnected");
    });
});
