const { app, BrowserWindow, ipcMain } = require('electron');
const isDev = require("electron-is-dev")
const os = require('os');
const path = require('path');
const { getMusicasOfDirectory } = require('./directory');
const Track = require('./track');
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
// eslint-disable-next-line global-require
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  console.log(os.homedir())
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      webSecurity: false,
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  // ipcMain.on('set-title', (event, title) => {
  //   const webContents = event.sender
  //   const win = BrowserWindow.fromWebContents(webContents)
  //   win.setTitle(title)
  // })

  // and load the index.html of the app.
  if (isDev) {
    mainWindow.loadURL(`http://127.0.0.1:5173/`)
  } else {
    mainWindow.loadFile(path.join(__dirname, 'index.html'));
  }
  Track.emitter.on('add-track', (track) => {
    // console.log(track)
    mainWindow.webContents.send('update-playlist', track)
  })
  
  // ipcMain.on('ready-get-track', (event, arg) => {
  //   console.log(arg)
  //   // Track.emitter.on('add-track', (track) => {
  //     event.reply('update-playlist', {})
  //   // })
  //   // event.reply('update-playlist', 'pong')
  // })  
  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  getMusicasOfDirectory(path.join(os.homedir(), 'Music'))
})
// app.on('ready', () => {
//   // ipcMain.handle('get:homedir', () => {
//   //  return getDirMusic()
//   // })
// });

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
