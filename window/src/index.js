const { app, BrowserWindow, ipcMain } = require('electron');
const isDev = require("electron-is-dev")
const os = require('os');
const path = require('path');
const { getMusicasOfDirectory } = require('./directory');
const {emitter: TrackEmitter} = require('./track');

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // fullscreen: true,
    webPreferences: {
      webSecurity: false,
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  
  // and load the index.html of the app.
  if (isDev) {
    mainWindow.loadURL(`http://localhost:5173/`)
  } else {
    mainWindow.loadURL(path.resolve(__dirname, '../build/index.html'));
  }
 
  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
};

app.whenReady().then(() => {
  const trackList = []
  // (track) => trackList.push(track)
  getMusicasOfDirectory(path.join(os.homedir(), 'Music'), (track) => trackList.push(track) )
  ipcMain.handle('update-playlist:init', () => trackList)
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});