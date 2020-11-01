import React from 'react';
import classes from './Select.module.css';

const Select = ({
 label, value, options, onChange,
}) => {
    const htmlFor = `${label}-${Math.random()}`;

    return (
       <div className={classes.Select}>
           <label htmlFor={htmlFor}>{label}</label>
           <select
               id={htmlFor}
               value={value}
               onChange={onChange}
           >
               {options.map((option) => (
                   <option key={option.id} value={option.value}>
                       {option.text}
                   </option>
                ))}
           </select>
       </div>
    );
};

export default Select;
