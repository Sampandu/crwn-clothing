import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input onChange={handleChange} {...otherProps} className="form-input" />
    {label ? (
      <div
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </div>
    ) : null}
  </div>
);

export default FormInput;
