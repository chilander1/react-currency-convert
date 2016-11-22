import React, {PropTypes} from 'react';
import CurrencyRow from './CurrencyRow';

const products = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];


const CurrencyTable = ({filter}) => {
    let rows = [];

    products.forEach((p) => {
        const nameLC = p.name.toLowerCase();
        const filterLC = filter.toLowerCase();

        if (nameLC.indexOf(filterLC) !== -1) {
            rows.push(
                <CurrencyRow key={p.name} data={p}/>
            );
        }
    });

    return <div> {rows} </div>;
};

CurrencyTable.propTypes = {
    filter: PropTypes.string
};

export default CurrencyTable;
