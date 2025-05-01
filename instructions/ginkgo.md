# Redmi Note 8/8T – Guide for Flashing Custom ROMs

## Requirements

- **Unlocked bootloader**
- **Custom recovery installed** (currently recommended: [OrangeFox 12.1 Recovery by Tejas](https://www.pling.com/p/2117593/))
- **Backup your internal storage**, as "Format Data" will erase everything

## Procedure Installing Recovery
- Extract Recovery.zip
- Enter fastboot mode by using a key combination Power + Vol Down.
- Connect your device to your PC via USB.
- Verify that your PC detects the device with fastboot devices.
- Flash the recovery image onto your device using this command:
`fastboot flash recovery path-to-recovery.img`
- Reboot into recovery mode by typing fastboot reboot recovery in command line or by holding Power + Vol Up.

## Procedure Installing ROM
- Download latest ROM KomodoOS release
- Reboot to Recovery
- Wipe: System, Vendor, Data, Dalvik, Cache, Metadata
- Untick Unmount System before installing a ZIP in Settings
- Flash Firmware: [Ginkgo](https://t.me/archivehkprjct/30) | [Willow](https://t.me/archivehkprjct/32)
- [Flash Retrofit Dynamic Converter](https://t.me/archivehkprjct/31)
- Flash Komodo ROM
- Flash Gapps (if Vanilla Rom)
- Flash Magisk (Optional - if you want root)
- Format Data > type "yes" and confirm
- Reboot to System

## Dirty Flash / Update
- Reboot to Recovery 
- Flash the update Komodo ROM
- Reboot to System

