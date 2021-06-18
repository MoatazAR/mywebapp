import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Loader from "react-loader-spinner";
import './css/tablestyle.css';

class TableBody extends Component{
    /* This function takes in the array of country data as props from the 'countrytable' component
    and uses the map function to dynamically render each row. The name cell contains a link that
    redirects the user to a page with further details on the selected country */

    state = {
        countrydata : [
            {flag:'https://cdn.countryflags.com/thumbs/colombia/flag-800.png', name:'Colombia',region:'Americas',population:'48759958'},
            {flag:'https://i.pinimg.com/564x/e0/bf/96/e0bf963a1400673fc43a8c4c2e51c716.jpg', name:'France',region:'Europe',population:'66710000'},
            {flag:'https://cdn.britannica.com/41/4041-004-A06CBD63/Flag-Vietnam.jpg', name:'Vietnam',region:'Asia',population:'92700000'},
            {flag:'https://www.worldatlas.com/r/w960-q80/upload/68/b6/f5/untitled-design-323.jpg', name:'Cuba',region:'Americas',population:'11239004'}]
    }

    render(){
        const {countries} = this.props;
        return (
            <tbody>
                {countries.map(item => <tr key={item.name}><td><img src={item.flag} className='imageclass'/></td><td><Link to={`/home/${item.name}`}>{item.name}</Link></td><td>{item.region}</td><td>{item.population}</td></tr>)}
            </tbody>
        );
    }

}

export default TableBody;