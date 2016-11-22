import React, { PropTypes } from 'react';

const CurrencyRow = ({ data }) =>
    <div>
        <p>{data.name} = {data.price} </p>
    </div>;


CurrencyRow.propTypes = {
    data: PropTypes.object
};

export default CurrencyRow;
