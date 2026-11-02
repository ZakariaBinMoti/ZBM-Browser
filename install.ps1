# ZBM Browser Windows Installer
$currentDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$vbsLauncher = Join-Path $currentDir "Launch_ZBM_Browser.vbs"

$wshShell = New-Object -ComObject WScript.Shell

# 1. Desktop Shortcut
try {
    $desktopFolder = [Environment]::GetFolderPath("Desktop")
    $desktopLnk = Join-Path $desktopFolder "ZBM Browser.lnk"
    Write-Host "[1/2] Creating Desktop shortcut at $desktopLnk..."
    $shortcut2 = $wshShell.CreateShortcut($desktopLnk)
    $shortcut2.TargetPath = "wscript.exe"
    $shortcut2.Arguments = "`"$vbsLauncher`""
    $shortcut2.WorkingDirectory = $currentDir
    $shortcut2.Description = "ZBM Personal Stealth Browser"
    $shortcut2.Save()
    Write-Host "      -> Desktop shortcut ready!" -ForegroundColor Green
} catch {
    Write-Warning "Could not create Desktop shortcut automatically: $($_.Exception.Message)"
}

# 2. Start Menu Shortcut
try {
    $startMenuPrograms = [System.IO.Path]::Combine($env:APPDATA, 'Microsoft\Windows\Start Menu\Programs')
    $startMenuLnk = Join-Path $startMenuPrograms "ZBM Browser.lnk"
    Write-Host "[2/2] Creating Start Menu shortcut at $startMenuLnk..."
    $shortcut1 = $wshShell.CreateShortcut($startMenuLnk)
    $shortcut1.TargetPath = "wscript.exe"
    $shortcut1.Arguments = "`"$vbsLauncher`""
    $shortcut1.WorkingDirectory = $currentDir
    $shortcut1.Description = "ZBM Personal Stealth Browser"
    $shortcut1.Save()
    Write-Host "      -> Start Menu shortcut ready! (Search 'ZBM Browser' in Start Menu)" -ForegroundColor Green
} catch {
    Write-Warning "Could not write to Start Menu automatically: $($_.Exception.Message)"
}

Write-Host "`nAll setup complete! You can double-click 'ZBM Browser' on your Desktop or launch Launch_ZBM_Browser.bat anytime." -ForegroundColor Cyan
