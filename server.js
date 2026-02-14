const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Servir el archivo HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Lógica de conexión
io.on('connection', (socket) => {
    console.log('¡Gallo, alguien se conectó! 🚀');

    // Cambiamos 'msg' por 'data' porque ahora recibimos un objeto
    socket.on('chat message', (data) => {
        // Reenviamos el objeto completo (mensaje + ID del que lo envió)
        io.emit('chat message', data);
    });

    socket.on('disconnect', () => {
        console.log('Alguien se salió del chat 😢');
    });
});

server.listen(3000, () => {
    console.log('Servidor listo en http://localhost:3000');
});