// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Ktest.css';
import {Button, IPanelProps, PanelStack} from "@blueprintjs/core";

import "normalize.css/normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";

type Props = {};

export default class Ktest extends Component<Props> {
  props: Props;


  render() {
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <h2>Hello World</h2>
        <div>
       
        </div>
      </div>
    );
  }
}
/*
 <PanelStack initialPanel={{ component: HomePagePanel, title: "Home"}} />

         <div>
          <Button onClick={this.openSettingsPanel} text="Settings" />          
          <Button intent="success" large="true" text="Test BluePrint button" />          
        </div>
 */

class HomePagePanel extends Component<IPanelProps> {

  render() {
      return 
      (        
          <Button onClick={this.openSettingsPanel} text="Settings" />                 
      );
  }

  openSettingsPanel() {
      // openPanel (and closePanel) are injected by PanelStack
      this.props.openPanel({
          component: SettingsPanel, // <- class or stateless function type
          props: { enabled: true }, // <- SettingsPanel props without IPanelProps
          title: "Settings",        // <- appears in header and back button
      });
  }
}

class SettingsPanel extends Component<IPanelProps> {
 render () {  
   return
   (   
     <h2>This is the "SettingsPanel"</h2>     
   );
 }
}
