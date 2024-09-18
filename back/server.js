import express from "express";
import serveIndex from "serve-index";

import api from "./api.js";

const app = express();
const port = 3000;
const publicDir = "../front/dist";

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use("/api", api);

app.use(express.static(publicDir));
app.use(serveIndex(publicDir, { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
