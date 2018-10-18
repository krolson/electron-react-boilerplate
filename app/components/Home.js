// @flow
import React, { Component } from 'react';
import Axios from 'axios';
import ReactJson from 'react-json-view'
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  /*constructor(props) {
    super(props);
  
  this.state = {
    testApiData: {}
  }*/

checkIfAdmin = () => {
  var exec = require('child_process').exec; 
   exec('NET SESSION', function(error, stdout, stderr) {
      console.log(stderr.length === 0 ? "admin" : "not admin");
      alert(stderr.length === 0 ? "YES! You're running as an admin!" : "NOT ADMIN");
    });
}

startApi = () => {
  var proc = require('child_process').spawn;
  var path = require('path');
  var currWorkingDir = process.cwd();     
  var apipath = path.join(currWorkingDir, '\\api\\bin\\dist\\win\\api.exe')
  alert(`apipath ${apipath}`);
  apiProcess = proc(apipath);

  apiProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
    alert(`stdout: ${data}`);
    //if (mainWindow == null) {
     // createWindow();
    //}
  });
  apiProcess.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });
  
  apiProcess.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });

  alert('done');  
  apiProcess.kill();
}

launchLocalExe = () => {
  var exec = require('child_process').exec;   
  var path = require('path');
  var currWorkingDir = process.cwd();
  var exeName = 'SimpleConsoleApp.exe';
  var exePath = path.join(currWorkingDir, exeName);
  //launch without full path hoping .exe is in the right place
   exec(exeName, function(error, stdout, stderr) {
     if(stderr.length === 0 && stdout.length === 0) {
       alert(`stderr and stdout were empty`);
     } else {
      console.log(`stderr: ${stderr}`);
      console.log(`stdout: ${stdout}`);
      alert(`Launching using "SimpleConsoleApp.exe" as path
      stderr: ${stderr}
      stdout: ${stdout}`);
     }                  
    });
  //launch using path to .exe
  exec(exePath, function(error, stdout, stderr) {
    if(stderr.length === 0 && stdout.length === 0) {
      alert(`stderr and stdout were empty`);
    } else {
     console.log(`stderr: ${stderr}`);
     console.log(`stdout: ${stdout}`);
     alert(`Launching using "${exePath}" as path
     stderr: ${stderr}
     stdout: ${stdout}`);
    }                  
   }); 
}

readAFile = () => {
  var path = require('path');
  var fs = require('fs');
  var xmldoc = require('xmldoc');
  var appHostConfigLocation = path.join(process.env.SystemRoot, "System32\\inetsrv\\config\\applicationHost.config");
  var randomTempFile = "e:\\TEMP\\foo.txt";
  alert(`crafted apphost.config path: ${appHostConfigLocation}`);
  fs.readFile( randomTempFile, (error, data) => {     
    if(error) { 
      alert(error); 
      return;
    }        
    console.log("File content was: " + data);
    alert(data);
   // var siteNode = configurationNode.decendantWithPath("system.applicationHost.sites.site")
   // var fileContents = new XMLDocument() data); 
    //alert("end");
    // configuration\system.applicationHost\sites collection site elements with name attribute has site name
  });
}

getSystemInfo = () => {
  var os = require('os');
  var path = require('path');
  alert(
  `os.release ${os.release()}
  os.type ${os.type()}
  process.cwd: ${process.cwd()}
  process.env.SystemDirectory: ${process.env.SystemDirectory}
  process.env.SystemRoot: ${process.env.SystemRoot}
  process.env.SystemDrive: ${process.env.SystemDrive}
  crafted apphost.config path: ${path.join(process.env.SystemRoot, "System32\\inetsrv\\config\\applicationHost.config")}
  __dirname? : ${__dirname}`
  );
}

  launchExe = () => {
     var exec = require('child_process').exec;
     //var executablePath = "C:\\Windows\\System32\\notepad.exe"
     var executablePath = "C:\\Windows\\System32\\cmd.exe /K start C:\\Windows\\System32\\cmd.exe"
  exec(executablePath, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    alert(`${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
  alert(`stdout: ${stdout}`);
  alert(`stderr: ${stderr}`);
});
    }

    tryGetTestApiData = () => {
     
   alert(`foo`);

   Axios.get('http://localhost:5000/api/test')
   .then( function(response) {
     console.log(response.data);
     alert(response.data);
    // testApiData: response.data
   })
   .catch(function(error) {
     console.log(error);
     alert(error);
   })
  
  /*
   var resultsStuff = fetch('http://localhost:5000/api/test')
    .then(results => {
       // alert(`results.json object: ${results.json()}`);
        return results.json();
    }).then(data => {
        let testApiData = data.results.map(
            (item) => {
                return(  
                  <div>                                     
                    <p>item.Prop1</p>
                    <p>item.Prop2</p>
                    </div>
                )
            })  
//this.setState({testApiData: testApiData});
  //          console.log("state", this.state.testApiData);
    })
 alert(`${resultsStuff}`);*/
     }
/*
});          <TestApi /> 
<ReactJson src={testApiData}></ReactJson>
  */
  render() {
   // const { testApiData } = this.state;
    return (
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        <Link to={routes.COUNTER}>to Counter</Link>
        <br />
        <Link to={routes.KTEST}>to K Test Page</Link>
        <br /><br />
        <button type="TestExeButton" onClick={this.launchExe}>Launch an exe (cmd.exe)</button>
        <br /><br />
        <button type="TestAdminButton" onClick={this.checkIfAdmin}>Running as Admin?</button>
        <br /><br />
        <button type="OtherTestButton" onClick={this.getSystemInfo}>Try get system info</button>
        <br /><br />
        <button type="OtherTestButton2" onClick={this.launchLocalExe}>Other Test - localExe?</button>
        <br /><br />
        <button type="TryGetApiData" onClick={this.tryGetTestApiData}>Try get API response</button>        
        <br /><br />
        <button type="StartApi" onClick={this.startApi}>Start API (localhost:5000/api/test)</button>
        <br /><br />
        <button type="TestFileReads" onClick={this.readAFile}>Read a file</button>
        <br />        

      </div>
    );
  }
}
