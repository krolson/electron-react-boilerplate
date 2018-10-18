import React, { Component } from 'react';
import "./Home.css"; //?

class TestApi extends Component {
    constructor() {
        super();
        this.state = {
            testApiData: [],
        };
    }


componentDidMount() {
    fetch('http://localhost:5000/api/test')
    .then(results => {
       // alert(`results.json object: ${results.json()}`);
        return results.json();
    }).then(data => {
        let testApiData = data.results.map(
            (item) => {
                return(  
                    <br />                  
                        <h3>Test properties</h3>
                        <p>item.Prop1</p>
                        <p>item.Prop2</p>
                )
            })
            this.setState({testApiData: testApiData});
            console.log("state", this.state.testApiData);
    })
}

render() {
    return (
<div className="container1">
  {this.state.testApiData}
</div>
    )
}


}