import React, { PropTypes } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DayPickerSection = ({selected, changeDate, maxDate}) => {
    return (
        <div>
            <DatePicker selected={selected}
                        onChange={changeDate} maxDate={maxDate}/>
        </div>
    );
};

DayPickerSection.propTypes = {
    selected: PropTypes.object,
    maxDate: PropTypes.object,
    changeDate: PropTypes.func
};

export default DayPickerSection;
