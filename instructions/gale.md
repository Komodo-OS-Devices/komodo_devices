# Redmi 13C/Poco C65 – Guide for Flashing Custom ROMs

## Before You Proceed

Make sure you have followed the **Imei backup guide**.

## Requirements

- **Unlocked bootloader**
- **Custom recovery installed** (currently recommended: Rom provided recovery)
- **Backup your internal storage**, as "Format Data" will erase everything

## Procedure Installing Recovery
- Enter fastboot mode by using a key combination Power + Vol Down.
- Connect your device to your PC via USB.
- Verify that your PC detects the device with fastboot devices.
- Flash the boot image onto your device using this command:
`fastboot flash boot boot-zzzzyyxx-wwww.img`
- Reboot into recovery mode by typing fastboot reboot recovery in command line or by holding Power + Vol Up.

## Procedure Installing ROM
- Download the latest release of KomodoOS.
- Reboot into recovery mode.
- Perform a Format data.
- Return to the main menu.
- Select Apply update > Apply from ADB.
- Now you can start sideloading by this command:
`adb sideload KomodoOS-v5.0-gale-OFFICIAL-Varanus-zzzzyyxx-wwww.zip`
