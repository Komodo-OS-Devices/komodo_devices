# 22-Jul-2022

## Komodo OS v4.4 | Codename: Seroja

**Android Version**: 12L (12.1)
**Maintainer**: @zkyzzz x @alanndz

### Device Changelog
- XiaomiParts: Add KCAL
- props: Switch back to OpenGL(Skia) for UI rendering
- thermal: reduce battery monitor idle range
- init: Remove UnityMain from sched_lib_name
- Several SEPolicy denial Fixes

### Kernel Changelog
- Upstream linux to 4.14.288  
[Kernel Changelog](https://github.com/aLnProject/kernel_xiaomi_vayu/commits/zeta-staging)

# 09-Jun-2022

## Komodo OS v4.3 | Codename: SweetPea

**Android Version**: 12L (12.1)  
**Maintainer**: @zkyzzz x @alanndz

### Device Changelog
- Use aLn Zeta kernel
- Update surfaceflinger props
- Switch to Vulkan for UI rendering
- Update build info from V13.0.2.0.SJUIDXM
- Disable debug.sf.latch_unsignaled from prop to reduces notification flicker
- Disable debug.sf.enable_hwc_vds from prop to fix lagging on screen recording
- Rework init.qcom.power.rc
- Rework and optimize powerhint.json
- Apply a boost after fp is authenticated
- Import power_profile from coral
- Fix deprecated power profile items
- thermal: Bump little cluster threshold a bit higher
- thermal: Count for max value instead of weighted average
- Several SELinux denial fixes

### Kernel Changelog
- Upstream linux to 4.14.281  
[Kernel Changelog](https://github.com/aLnProject/kernel_xiaomi_vayu/commits/zeta-staging)

# 19-Apr-2022

## Komodo OS v4.2 | Codename: Sakura

**Android Version**: 12L (12.1)
**Maintainer**: @zkyzzz x @alanndz

### Device Changelog
- Update blobs from MIUI 13.0.1.0.SJUIDXM
- Fixed Side FP Sensor Indicator Location
- Changed back product code into M2102J20SG for unlocking more FPS Option
- Import Power-libperfmgr, Powerstats from Pixel
- Migrate to Pixel thermal
- Remove Thermal Profiles
- Add Per-App Touch Control
- Several SELinux denial fixes

### Kernel Changelog
- Add New Waifu aLn Zeta
- Upstream kernel to 4.14.275
- Disable LLVM Polly  
[Kernel Changelog](https://github.com/aLnProject/kernel_xiaomi_vayu/commits/zeta)

# 22-Feb-2022

## Komodo OS v4.1 | Codename: Serunai

**Android Version**: 12L (12.1)
**Maintainer**: @zkyzzz x @alanndz

### Device Changelog
- Add Thermal Profile Shortcut On QS Tile
- Add Dirac QS Tile
- Add More Dirac Preset
- Add long-click action for HBM and CABC QS Tile
- Enable FUSE Passthrough for better sdcard performance
- Fix memory-leak problem on Dirac
- Fix some VNDK related issues
- Fix thermald inconsistency problem
- Fix video encoding problem on GCam
- GPS HAL Improvement
- Switch to QTI Bluetooth HAL
- Switch to aLn kernel

### Kernel Changelog
- Upstream kernel to 4.14.267
- Backport rcu from kernel 5.x
- Backport process reclaim from redbull
- Enable workqueue power-efficient mode by default
- Disable per-cgroup pressure tracking
- Remove unnecessary fps values from dfps-list
- Add 75 fps value to dfps-list
- Minimize alarmtimer wakeup time
- Change max readahead size to 128KB
- Add support FUSE Passthrough

# 11-Feb-2022

## Komodo OS v4.1 | Codename: Serunai

**Android Version**: 12L (12.1)
**Maintainer**: @zkyzzz x @alanndz  

### Device Changelog
- Fixup SurfaceFlinger service pinning
- Fixup task_profiles usage on vendor init script
- Update IMS libs from alioth-qssi-user-12-SKQ1.210908.001

### Kernel Changelog
- Add LionSemi LN8000 charger driver
- Fix screenshot button issues on FPC fingerprint
- Merge CAF tag LA.UM.9.1.r1-11600-SMxxx0.0
- Merge Linux stable v4.14.265

# 08-Jan-2022

## Komodo OS v4.0 | Codename: Sabre

**Android Version**: 12
**Maintainer**: @zkyzzz x @alanndz

### Device Changelog
- Switch To Chaldea Kernel (Thanks to nullxception for awesome kernel)
- Switch To AOSP Clang 14
- Upgrade to PowerHAL 1.3 (libperfmgr) w/ optimized setup
- Remove IO read_ahead_kb tune
- Trim qcom.post_boot script for msmnile
- Remove hints for Adaptive Battery CPU Throttling
- Remove schedutil ratelimit setup
- Optimize CPU frequency tables and hinting defaults
- Register dummy libqti-perfd-client to public-libraries back
- Migrate to Xiaomi power AIDL HAL
- Enable F2F2 background GC
- Add f2fs sysfs permission
- Replace SchedtuneHighCap with WALT's sched boost
- Tune down schedtune boost
- Tune GPU freq table and power mode defaults

# 05-Jan-2022

## Komodo OS v4.0 | Codename: Sabre

**Android Version**: 12
**Maintainer**: @zkyzzz x @alanndz

### Device Changelog
- Fixed CTS SafetyNet
- Added Back Chaldeaprjkt GameSpace
- Update AOSP Clang To 14.0.1
- Several fixes for Dirac Sound Enhancer
- Add bass booster preset for MiSound
- Remove renderscript from VINTF and move renderengine to threaded skia
