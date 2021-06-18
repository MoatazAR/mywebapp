import React, { Component } from 'react';
import axios from 'axios';
import './css/tablestyle.css';
import Loader from "react-loader-spinner";

class Details extends Component{
    /* This function extracts the specific data for the selected country. It uses the name
    parameter to extract data from the API that is specific to the desired country. It then 
    saves particular data to the state and renders it out in the data table */
    state = {
        countrydata: [],
        name: '',
        capital: '',
        region: '',
        subregion: '',
        population: '',
        demonym: '',
        flag: '',
        languages: '',
        timezones: '',
        currency: '',
        loading: <Loader type="Circles" color="#00BFFF" height={100} width={100} style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}/>
    }
    async componentDidMount(){
        const { match } = this.props;
        const {data:countrydata} = await axios.get(`https://restcountries.eu/rest/v2/name/${match.params.name}`);
        //this.setState({ countrydata });
        const name = match.params.name;
        const capital = countrydata[0].capital;
        const region = countrydata[0].region;
        const subregion = countrydata[0].subregion;
        const population = countrydata[0].population;
        const demonym = countrydata[0].demonym;
        const flag = countrydata[0].flag;
        const timezones = countrydata[0].timezones;
        const languages = countrydata[0].languages[0].name;
        const currency = countrydata[0].currencies[0].name;
        const loading = ''
        this.setState({ capital, countrydata, region, subregion, population, demonym, flag, languages, name, timezones, currency, loading });
      }

    render(){
        const { countrydata, capital, region, subregion, population, demonym, flag, languages, name, timezones, currency, loading } = this.state;
        return (
            <div>  
                {loading} 
                <div className='header'><img src={flag} className='imagedetailclass'/> <h1 style={{marginLeft: 200}}> {name}</h1></div>
                <table className='table m-2'>
                    <tr><td className='details'>Capital</td><td>{capital}</td></tr>
                    <tr><td className='details'>Region</td><td>{region}</td></tr>
                    <tr><td className='details'>Subregion</td><td>{subregion}</td></tr>
                    <tr><td className='details'>Population</td><td>{population}</td></tr>
                    <tr><td className='details'>Demonym</td><td>{demonym}</td></tr>
                    <tr><td className='details'>Language(s)</td><td>{languages}</td></tr>
                    <tr><td className='details'>Timezone(s)</td><td>{timezones}</td></tr>
                    <tr><td className='details'>Currency</td><td>{currency}</td></tr>
                </table>      
            </div>
        );
    }
}

export default Details;