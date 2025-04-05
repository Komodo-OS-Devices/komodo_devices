# Poco X3 Pro – Guide for Flashing Custom ROMs

## Before You Proceed

Make sure you have followed the **EFS + persist backup guide**.

## Requirements

- **Unlocked bootloader** (check the #unlockbl notes)
- **Custom recovery installed** (currently recommended: [TWRP by Nebrassy](https://t.me/Nebrassy))
- **Backup your internal storage**, as "Format Data" will erase everything

## Procedure (For non-OSS vendor-based ROMs)

- **Boot/reboot into recovery** (Hold Volume Up + Power during boot)
- **Flash the recommended stock MIUI ROM**. You can find it [here](https://xiaomifirmwareupdater.com). Full ROM flash is necessary because it includes the firmware and vendor files. If you're already on that MIUI version or have previously flashed it, you can skip this step. You can also flash the fastboot version of the stock MIUI ROM via Mi Flash Tool / Fastboot, but it’s a slower method.
- **Flash the custom ROM .zip**
- **Flash GApps + GApps add-ons** if you're flashing a gapp-less/vanilla build (Optional)
- **Flash Magisk** (Optional – only if you want root)
- **Format Data** > type "yes" and confirm (this is different from just "Wipe Data")
- **Reboot to system**

## Procedure (For OSS vendor-based ROMs)

- **Boot/reboot into recovery** (Hold Volume Up + Power during boot)
- **Flash the recommended MIUI firmware**
- **Flash the custom ROM .zip**
- **Flash GApps + GApps add-ons** if you're flashing a gapp-less/vanilla build (Optional)
- **Flash Magisk** (Optional – only if you want root)
- **Format Data** > type "yes" and confirm (this is different from just "Wipe Data")
- **Reboot to system**

