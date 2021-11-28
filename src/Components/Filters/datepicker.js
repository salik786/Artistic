import React, { useState } from 'react';
import DatePicker from 'react-date-picker';

function DatePicker() {
    const [value, setVal] = useState(new Date());
    console.log(value);
    const onChange = (e) => {

        console.log(e.target.value);
        setVal(e.target.value);
    }
    return (
        <div>
            <DatePicker
                onChange={onChange}
                value={value}
            />
        </div>
    );
}
export default DatePicker;