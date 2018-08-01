import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';


/**
 * Initialization data for the x3d extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'x3d',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log('JupyterLab extension x3d is activated!');
  }
};

export default extension;
