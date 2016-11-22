import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {checkCurrency} from '../actions';
import CurrencyTable from '../components/CurrencyTable';

const SelectedCurrency = ({filter, onFilter}) => {
    let input;

    return (
        <div className="filterable-table">
            <input
                value={filter}
                ref={node => {
                    input = node;
                }}
                onChange={() => onFilter(input.value)}/>
            <CurrencyTable filter={filter}/>

        </div>
    );
};

SelectedCurrency.propTypes = {
    filter: PropTypes.string,
    onFilter: PropTypes.func
};

const mapStateToProps = (state) => {
    console.log(state.filter);
    return {
        filter: state.filter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFilter: filterText => dispatch(checkCurrency(filterText), console.log(checkCurrency(filterText)))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectedCurrency);
