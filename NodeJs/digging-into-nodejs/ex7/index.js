#!/usr/bin/env node

"use strict";

const util = require("util");
const childProc = require("child_process");

const MAX_CHILD_PROCESS = 100;

const delay = util.promisify(setTimeout);

main().catch(console.error);

// **********

async function main() {
  while (true) {
    console.log(`Sending ${MAX_CHILD_PROCESS} request...`);

    const children = [];

    for (let i = 0; i < MAX_CHILD_PROCESS; i++) {
      const child = childProc.spawn("node", ["child.js"]);
      children.push(child);
    }

    let resps = children.map((child) => {
      return new Promise((resolve) => {
        child.on("exit", (code) => {
          if (code === 0) {
            resolve(true);
          } else {
            resolve(false);
          }
        });
      });
    });

    resps = await Promise.all(resps);

    if (resps.filter(Boolean).length === MAX_CHILD_PROCESS) {
      console.log("Success!");
    } else {
      console.error("Failures.");
    }

    await delay(500);
  }
}
