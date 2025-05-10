const fs = require("fs");
const path = require("path");

const devicesOutput = path.resolve(__dirname, "../../devices.json");
const devicesDir = path.resolve(__dirname, "../../devices");

const deviceList = fs.readdirSync(devicesDir);

const devices = deviceList.map((filename) => {
  const fullPath = path.join(devicesDir, filename);
  const deviceEntry = JSON.parse(fs.readFileSync(fullPath, "utf8"));

  return {
    name: deviceEntry.model,
    brand: deviceEntry.vendor,
    version:
      deviceEntry.version.charAt(0).toUpperCase() +
      deviceEntry.version.slice(1),
    androidVersion: deviceEntry.androidVersion,
    codename: deviceEntry.codename,
    maintainer: deviceEntry.maintainer.github,
  };
});

devices.sort((a, b) => a.codename.localeCompare(b.codename));

const result = { devices };
fs.writeFileSync(devicesOutput, JSON.stringify(result, null, 2));
