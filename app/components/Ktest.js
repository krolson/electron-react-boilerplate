// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Ktest.css';

type Props = {};

export default class Ktest extends Component<Props> {
  props: Props;


  render() {
    return (
      <div>
        <h2>Hello World</h2>
      </div>
    );
  }

  /*  
        <div>
        <h2>Hello World</h2>
         <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={`counter ${styles.ktest}`} data-tid="ktest">
          {counter}
        </div>
      </div>


          <Link to={routes.COUNTER}>to Counter</Link>
        <br />
        <Link to={routes.HOME}>to Home</Link>
        <br /><br />
        <button type="TestExeButton" onClick={this.launchExe}>Launch an exe (cmd.exe)</button>
        <br /><br />
        <button type="TestAdminButton" onClick={this.checkIfAdmin}>Running as Admin?</button>
        <br /><br />
        <button type="OtherTestButton" onClick={this.getSystemInfo}>Try get system info</button>
        <br /><br />
        <button type="OtherTestButton2" onClick={this.launchLocalExe}>Other Test - localExe?</button>
        <br /><br />
        <button type="TestFileReads" onClick={this.readAFile}>Read a file</button>
        <br /> 
  */
}
