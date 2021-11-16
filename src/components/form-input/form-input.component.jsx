import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleCahnge, label, ...otherProps }) => (
    <div className="group">
        <input className='form-input onChange={handleChange} {...otherProps}' />
        {
            label ? 
            (<lable 
                className={`${
                    otherProps.value.length ? 'shrink' : ''
                     } form-input-label`}
                     >
                         {}

            </lable>
            ) : null
        }
        </div>

)
export default FormInput;
