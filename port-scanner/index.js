const tcp = require("net");
const dns = require("dns");
const colors = require("colors");
class PortScanner {
  scanPort(options) {
    console.log("in action");
    try {
      const port = options.port || 80;
      const host = options.host || null;
      const socket = tcp.connect({ host: host, port: port });
      console.log("socket created successfully".green);
      process.exit(0);
    } catch (e) {
      console.log(e);
      process.exit(1);
    }
  }
  getIpAddressByHost(options) {
    if (!options.host) {
      console.log("No host specified.".red);
      process.exit(1);
    }
    dns.lookup(options.host, (error, result) => {
      if (error) {
        console.log(error.code.red);
        process.exit(1);
      } else {
        console.log(result.green);
        process.exit(0);
      }
    });
  }
  // getHostByIpAddress(options) {

  // }
}

module.exports = PortScanner;
