@echo off
setlocal
cd /d "%~dp0"
set "ELECTRON_RUN_AS_NODE="

if exist "node_modules\electron\dist\electron.exe" (
    start "" "node_modules\electron\dist\electron.exe" .
    exit /b 0
)

if exist "node_modules\.bin\electron.cmd" (
    start "" "node_modules\.bin\electron.cmd" .
    exit /b 0
)

echo [ERROR] Electron executable not found in node_modules!
echo Please verify that node_modules is installed.
pause
