import React from 'react';
import { remote } from 'electron';
import { Button } from 'antd';
import creeper from '../../assets/images/creeper.png';

import styles from './CrashHandler.scss';

export default props => {
  return (
    <div className={styles.main}>
      <div>
        <img src={creeper} />
        <h1>The launcher blew up</h1>
        <h2>SubitoLauncher got rekt by a creeper.</h2>
        <Button
          type="primary"
          onClick={() => {
            remote.app.relaunch();
            remote.app.quit();
          }}
        >
          Restart SubitoLauncher
        </Button>
      </div>
    </div>
  );
};
