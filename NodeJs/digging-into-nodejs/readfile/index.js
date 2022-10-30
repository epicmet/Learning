#!/usr/bin/env node

"use strict";

import fs from "fs";
import path from "path";
import util from "util";

import getStdin from "get-stdin";
import minimist from "minimist";

const args = minimist(process.argv.slice(2), {
  boolean: ["help", "in"],
  string: ["file"],
});

const BASE_PATH = path.resolve(process.env.BASE_PATH || __dirname);

if (args.help) {
  printHelp();
} else if (args.in || args._.includes("-")) {
  getStdin().then(processFile).catch(error);
} else if (args.file) {
  fs.readFile(path.join(BASE_PATH, args.file), (err, contents) => {
    if (err) {
      error(err.toString());
    } else {
      processFile(contents.toString());
    }
  });
} else {
  error("Incorrect usage", true);
}

function printHelp() {
  console.log(`ex1 usage:
    ex1.js --file={FILE_NAME}

    --help               print this help
    --file={FILE_NAME}   process the file
    --in, -              process stdin
  `);
}

function error(msg, includeHelp = false) {
  console.error(msg);

  if (includeHelp) {
    console.log("");
    printHelp();
  }
}

function processFile(contents) {
  contents = contents.toUpperCase();
  process.stdout.write(contents);
}
