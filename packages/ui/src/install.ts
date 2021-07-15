import * as components from './components';

class createInstaller {
  install (app, option) {
    app.use(components.Button)
  }
}

export default new createInstaller