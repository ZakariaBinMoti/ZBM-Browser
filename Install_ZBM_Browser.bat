@echo off
setlocal
title Installing ZBM Personal Browser...
echo ========================================================
echo        Installing ZBM Personal Stealth Browser
echo ========================================================
echo.

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0install.ps1"

echo.
echo ========================================================
echo   Installation Complete!
echo   You can now search 'ZBM Browser' in Windows Start Menu
echo   or double-click the 'ZBM Browser' icon on your Desktop.
echo ========================================================
echo.
pause
