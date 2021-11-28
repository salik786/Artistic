import React, { useState } from 'react';
import CountrySelect from 'react-bootstrap-country-select';

const CountryFilter = () => {

    const [value, setValue] = useState(null);

    return (
        <CountrySelect
            value={value}
            onChange={setValue}
            flags="true"
        />
    );

};
export default CountryFilter;