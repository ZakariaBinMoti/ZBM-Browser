Set FSO = CreateObject("Scripting.FileSystemObject")
ScriptDir = FSO.GetParentFolderName(WScript.ScriptFullName)

Set WshShell = CreateObject("WScript.Shell")
On Error Resume Next
WshShell.Environment("PROCESS").Remove("ELECTRON_RUN_AS_NODE")
On Error GoTo 0
WshShell.CurrentDirectory = ScriptDir

Dim electronExe
electronExe = ScriptDir & "\node_modules\electron\dist\electron.exe"

If FSO.FileExists(electronExe) Then
    WshShell.Run """" & electronExe & """ .", 1, False
Else
    WshShell.Run "node_modules\.bin\electron.cmd .", 1, False
End If
