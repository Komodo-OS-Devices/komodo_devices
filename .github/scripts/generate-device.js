const fs = require("fs");
const path = require("path");

const devicesEntry = path.resolve(__dirname, "../../devices.json");
const devicesDir = path.resolve(__dirname, "../../devices");

if (!fs.existsSync(devicesEntry)) {
  fs.writeFileSync(devicesEntry, JSON.stringify({ devices: [] }, null, 2));
}

const { devices } = JSON.parse(fs.readFileSync(devicesEntry, "utf8"));

devices.forEach((device) => {
  const filePath = path.join(devicesDir, `${device.codename}.json`);
  if (fs.existsSync(filePath)) {
    return;
  }

  const deviceData = {
    maintainer: {
      name: device.maintainer,
      telegram: device.maintainer,
      github: device.maintainer,
    },
    model: device.name,
    vendor: device.brand,
    codename: device.codename,
    status: parseFloat(device.androidVersion) < 15.0 ? "Inactive" : "Active",
    version: device.version,
    androidVersion: device.androidVersion,
    lastUpdated: "",
    supportGroup: "",
    downloadUrl: "",
  };

  fs.writeFileSync(filePath, JSON.stringify(deviceData, null, 2));
});
