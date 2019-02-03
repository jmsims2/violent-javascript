#!/usr/bin/env node
const program = require("commander");
const PortScanner = require("./port-scanner");

program
  .command("scan-port")
  .option("-h --host [host]", "specify the host name")
  .option("-p --port [port]", "specify the port")
  .action(new PortScanner().scanPort);

program
  .command("get-ip")
  .option("-h --host [host]", "specify the host name")
  .action(new PortScanner().getIpAddressByHost);

program.parse(process.argv);
