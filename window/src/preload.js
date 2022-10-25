// See the Electron documentation for details on how to use preload scripts:

const { contextBridge, ipcRenderer } = require("electron");
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
contextBridge.exposeInMainWorld('electronAPI', {
  setTitle: (title) => ipcRenderer.send('set-title', title),
  getHomedir: () => ipcRenderer.invoke('get:homedir')
})