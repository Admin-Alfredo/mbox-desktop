// See the Electron documentation for details on how to use preload scripts:

const { contextBridge, ipcRenderer } = require("electron");
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
// ipcRenderer.on('async-reply', (_event, arg) => {
//   console.log(arg)
// })
const tracks = []
ipcRenderer.on('update-playlist', (event, track) => tracks.push(track))
contextBridge.exposeInMainWorld('electronAPI', {
  // setTitle: (title) => ipcRenderer.send('set-title', title),
  // getHomedir: () => ipcRenderer.invoke('get:homedir'),
  onUpdatePlaylist: (callback) => callback(tracks),
  refleshPlaylist: () => ipcRenderer.send('reflesh-playlist')
})