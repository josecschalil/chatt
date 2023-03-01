"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const socket_io_1 = require("socket.io");
const ioHandler = (req, res) => {
    if (!res.socket.server.io) {
        console.log('*First use, starting socket.io');
        const io = new socket_io_1.Server(res.socket.server);
        io.on('connection', socket => {
            socket.broadcast.emit('a user connected');
            socket.on('send', msg => {
                console.log('neww');
            });
        });
        res.socket.server.io = io;
    }
    else {
        console.log('socket.io already running');
    }
    res.end();
};
exports.config = {
    api: {
        bodyParser: false
    }
};
exports.default = ioHandler;
//# sourceMappingURL=socket.js.map