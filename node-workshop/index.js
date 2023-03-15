//import os from "os";
//console.log(os.platform());
// import fs from "fs";
// fs.readFile("file.txt", (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });
import dotenv from "dotenv";
import fs from "fs";
import http from "http";
dotenv.config();
const server = http.createServer((req, res) => {
  fs.readFile("file.txt", (err, data) => {
    if (err) throw err;
    res.end(data.toString());
  });
});

server.listen(process.env.PORT, () => {
  console.log(`server started at port ${process.env.PORT}`);
});
