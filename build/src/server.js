"use strict";
// src/server.ts
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = process.env.PORT || 3000;
app_1.app.listen(port, () => {
    console.log(`Example app is running on http://localhost:${port}`);
});
