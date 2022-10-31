#!/usr/bin/env node

"use strict";

const fs = require("fs");
const path = require("path");
const { Transform } = require("stream");
const zlib = require("zlib");

const minimist = require("minimist");
const CAF = require("caf");

const args = minimist(process.argv.slice(2), {
  boolean: ["help", "in", "out", "comporess", "uncompress"],
  string: ["file"],
});

const BASE_PATH = path.resolve(process.env.BASE_PATH || __dirname);

let OUTFILE = path.join(BASE_PATH, "out.txt");

processFile = CAF(processFile);

if (args.help) {
  printHelp();
} else if (args.in || args._.includes("-")) {
  const tooLong = CAF.timeout(13, "Took too long");
  processFile(tooLong, process.stdin);
} else if (args.file) {
  const stream = fs.createReadStream(path.join(BASE_PATH, args.file));

  const tooLong = CAF.timeout(13, "Took too long");

  processFile(tooLong, stream)
    .then(() => {
      console.log("Complete!");
    })
    .catch(error);
} else {
  error("Incorrect usage", true);
}

function printHelp() {
  console.log(`ex3 usage:
    ex3.js --file={FILE_NAME}

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

function* processFile(signal, inStream) {
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

  signal.pr.catch(() => {
    outStream.unpipe(targetStream);
    outStream.destroy();
  });

  yield streamComplete(outStream);
}

function streamComplete(stream) {
  return new Promise((resolve) => {
    stream.on("end", resolve);
  });
}
