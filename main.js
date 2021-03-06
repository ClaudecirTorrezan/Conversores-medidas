const { app, BrowserWindow } = require('electron')
function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      show: false
    })
  
    win.loadFile('index.html')
    win.once("ready-to-show", ()=>{
      win.show()
    })
  }
  app.whenReady().then(() => {
    createWindow()
  })
  