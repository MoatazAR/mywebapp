import React, { Component } from "react";
import CountryTable from './countrytable';
import './css/tablestyle.css';

class Mainpage extends Component{

    render(){
        return (
            <div>
                <h1 style={{marginLeft: 20}}>List of Countries, Autonomous Regions and Territories</h1>
                <div className="col"><CountryTable/></div>
            </div>
            )
    }
}

export default Mainpage;