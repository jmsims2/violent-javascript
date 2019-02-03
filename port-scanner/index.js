#!/usr/bin/env node

const tcp = require("net");
const program = require("commander");

console.log("in index.js for port-scanner");

program
  .option("-p --port [port]", "which port to use")
  .option("-h --host [host]", "host name")
  .action(function(options) {
    console.log("in action");
    try {
      const port = options.port || 80;
      const host = options.host || null;
      const socket = tcp.connect({ host: host, port: port });
      console.log("socket created successfully: ", socket);
    } catch (e) {
      console.log(e);
    }
  });

program.parse(process.argv);
