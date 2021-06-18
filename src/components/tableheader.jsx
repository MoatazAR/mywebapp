import React, { Component } from 'react';
import './css/tablestyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class TableHeader extends Component{
    /* This page returns the headers for the country data table. Each header (sans maps) has an
    onClick function, 'onSort', that sorts the table by the selected column. onSort takes the 
    lowercase value as an argument to determine which column will be used to sort the table*/
    state = {
        headerNames: ['Flag', 'Name', 'Region', 'Population']
    }


    render(){
        const {onSort, sortedColumn} = this.props;
        return (
            <thead>
                <tr>
        {this.state.headerNames.map(column => <th key={column} onClick={() => onSort(column.toLowerCase())}>{column} </th>)}
                </tr>
            </thead>
        );
    }
}

export default TableHeader;