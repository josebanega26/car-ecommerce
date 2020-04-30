import React from 'react';
import './CustomSelect.scss';
import Select from 'react-dropdown-select';
const CustomSelect = ({ placeholder = 'Filtrado por', options = [] }) => {
  return (
    <>
      <Select
        placeholder={placeholder}
        className='custom_select'
        options={options}
      ></Select>
    </>
  );
};

export default CustomSelect;
