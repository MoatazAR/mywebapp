import React, { Component } from 'react';
import TableHeader from './tableheader';
import TableBody from './tablebody';
import Pagination from './pagination';
import axios from 'axios';
import './css/tablestyle.css';
import { Paginate } from './utilities/paginate';
import _ from 'lodash';
import Loader from "react-loader-spinner";

class CountryTable extends Component{
    /*The state contains four properties:
     an array to store the data returned from API (countries), 
     the number of rows in a single page (pageSize), 
     the current page that has a default value of 1 
     and a sortColumn object used for sorting by each column*/
    state = {
        countries: [],
        pageSize: 15,
        currentpage: 1,
        sortedColumn: {column:'Name', order:'asc'},
        loading: <Loader type="Circles" color="#00BFFF" height={100} width={100} style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}/>
    };
    /* We will extract the API data using the Axios library & add the value of our data to countries array */
    async componentDidMount(){
        const {data:countries} = await axios.get('https://restcountries.eu/rest/v2/all');
        const loading = ''
        this.setState({ countries, loading });
      }
    /* OnChangePage takes in the page we're on as an argument 
    and sets it to the current page */
    onChangePage = (page) => {
        this.setState({currentpage: page})
    }
    /* handleSort takes in the selected column as an argument,
    if the same column is selected twice then we reverse the order (asc=>desc or desc=>asc) 
    otherwise the column property of sortedColumn is set to the selected column and order to asc */
    handleSort = (column) => {
        if (column !== 'flag'){
            const sortedColumn = {...this.state.sortedColumn};
            if (sortedColumn.column === column)
                sortedColumn.order = (sortedColumn.order === 'asc') ? 'desc' : 'asc';
            else {
                sortedColumn.column = column;
                sortedColumn.order = 'asc';
            }
            this.setState({ sortedColumn });
        }
    }

    render(){
        const { length:countriesCount} = this.state.countries;

        const { countries, pageSize, currentpage, sortedColumn, loading } = this.state;

        // I used lodash function 'orderBy' to order the data by the desired column & order stored in sortedColumn object
        const sortedCountries =  _.orderBy(countries, [sortedColumn.column], [sortedColumn.order])

        // Call the Paginate function to return the desired page
        const paginatedCountries = Paginate(sortedCountries, currentpage, pageSize)

        return (
            <div>
            {loading} 
            <table className='table m-2'>
                <TableHeader onSort = {this.handleSort} sortedColumn={sortedColumn}/>
                <TableBody countries={paginatedCountries}/>
            </table>
            <Pagination countriesCount={countriesCount} pageSize={pageSize} currentpage={currentpage} onChangePage={this.onChangePage}/>
            </div>
        );
    }
}

export default CountryTable;