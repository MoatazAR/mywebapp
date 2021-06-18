import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {
    /* This stateless function component is responsible for returning the pagination bar
    rendered at the bottom of the page. It takes in the number of rows (countriesCount)
    and the page size to determine the number of pages to render. It also takes in the
    current page to ensure that the selected page has a highlighted pagination number */
    const { countriesCount, pageSize, currentpage, onChangePage } = props

    // Get the number of pages
    const pageCount = Math.ceil(countriesCount/pageSize);

    // There is no need for the pagination bar if there is only 1 page
    if (pageCount === 1) return null;

    // Use lodash function 'range' to return the range of numbers to be rendered in the pagination bar
    const pageArr = _.range(1, pageCount+1);

    return (
        /* We will use the map function to dynamically render the numbers used for pagination.
        We will use bootstrap classes for the styling of the pagination bar. In each list item
        we will select whether the li has the 'page-item active' class or not based on whether 
        the selected li number matches the current page. Each li has a link with an onClick event
        that calls the onChangePage function. The onChangePage function takes in the page number
        as an argument and sets the current page to the clicked page */
        <nav>
        <ul className="pagination">
            {pageArr.map(page => 
                <li key={page} className={page === currentpage ? "page-item active" : "page-item"}>
                    <a className="page-link" onClick={() => onChangePage(page)}>{page}</a>
                </li>)}
        </ul>
    </nav>
    );
}

export default Pagination;