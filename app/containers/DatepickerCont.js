import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {checkDate} from '../actions';
import moment from 'moment';
import DayPickerSection from '../components/DayPickerSection';

const DatepickerCont = ({dates, changeDate}) => {
    return (
        <div className="my-app">
            <DayPickerSection selected={moment(dates)} changeDate={changeDate} maxDate={moment()}/>
        </div>
    );
};

DatepickerCont.propTypes = {
    dates: PropTypes.object,
    maxDate: PropTypes.object,
    changeDate: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        dates: state.changeDate
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeDate: date => dispatch(checkDate(date))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DatepickerCont);
