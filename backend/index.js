import express from 'express';
import http from 'http';
import path from 'path';
import { Server } from 'socket.io';

const app = express();
const port = 5000;
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'));
});
/*
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
*/
const httpServer = http.Server(app);
httpServer.listen(port, () => {
  console.log(`server started at http://localhost:${port}/`);
});
