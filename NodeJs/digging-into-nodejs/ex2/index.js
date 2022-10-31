#!/usr/bin/env node

"use strict";

const fs = require("fs");
const path = require("path");
const { Transform } = require("stream");
const zlib = require("zlib");

const minimist = require("minimist");

const args = minimist(process.argv.slice(2), {
  boolean: ["help", "in", "out", "comporess", "uncompress"],
  string: ["file"],
});

const BASE_PATH = path.resolve(process.env.BASE_PATH || __dirname);

let OUTFILE = path.join(BASE_PATH, "out.txt");

if (args.help) {
  printHelp();
} else if (args.in || args._.includes("-")) {
  processFile(process.stdin);
} else if (args.file) {
  const stream = fs.createReadStream(path.join(BASE_PATH, args.file));

  processFile(stream);
} else {
  error("Incorrect usage", true);
}

function printHelp() {
  console.log(`ex2 usage:
    ex2.js --file={FILE_NAME}

    --help               print this help
    --file={FILE_NAME}   process the file
    --in, -              process stdin
    --out                print to stdout
    --compress           gzip the output
    --uncompress         un-gzip the input
  `);
}

function error(msg, includeHelp = false) {
  console.error(msg);

  if (includeHelp) {
    console.log("");
    printHelp();
  }
}

function processFile(inStream) {
  let outStream = inStream;

  if (args.uncompress) {
    const gunzipStream = zlib.createGunzip();

    outStream = outStream.pipe(gunzipStream);
  }

  const upperStream = new Transform({
    transform(chunck, _enc, cb) {
      this.push(chunck.toString().toUpperCase());
      cb();
    },
  });

  outStream = outStream.pipe(upperStream);

  if (args.compress) {
    const gzipStream = zlib.createGzip();

    outStream = outStream.pipe(gzipStream);
    OUTFILE = `${OUTFILE}.gz`;
  }

  const targetStream = args.out
    ? process.stdout
    : fs.createWriteStream(OUTFILE);

  outStream.pipe(targetStream);
}
