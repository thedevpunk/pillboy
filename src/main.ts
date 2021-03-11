import { app, BrowserWindow} from 'electron';
import isDev from 'electron-is-dev';

const createWindow = () => {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  console.log(isDev);
  win.loadURL(
    isDev
      ? 'http://localhost:9000'
      : `file://${app.getAppPath()}/index.html`,
  )

  // win.loadFile('index.html');
}

app.on('ready', createWindow);