// See the Electron documentation for details on how to use preload scripts:

const { contextBridge, ipcRenderer } = require("electron");

ipcRenderer.on('update-playlist', (event, track) => tracks.push(track))
contextBridge.exposeInMainWorld('electronAPI', {
  getTrackForUpdatePlaylist: () => ipcRenderer.invoke('update-playlist:init'),
  // refleshPlaylist: () => ipcRenderer.send('reflesh-playlist')
})