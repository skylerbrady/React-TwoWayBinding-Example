import React from 'react';
import './Validation.css'

const validation=(props)=>{
    let validationMessage=''
    if(props.inputLenght >=1 && props.inputLenght<=4){
        validationMessage=' Text is too small!!'
    }
    if(props.inputLenght>=8) {
        validationMessage='Text is too long!!'
    }

return (
    <div>
    <p className='validateMessage'>{validationMessage}</p>
    </div>
);
}
export default validation;