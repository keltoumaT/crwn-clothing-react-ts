import React from "react";
import './form-input.styles.scss';


interface IProps{
    label:string;
    handleChange:(event: React.ChangeEvent<HTMLInputElement>) =>void;
    type:string;
    name:string;
    value:string;
    required:any;

}

const FormInput: React.FC<IProps> = ({handleChange, label, ...otherProps})=>{

    return(
        <div className="group">
            <input type="text" onChange={handleChange} {...otherProps} className="form-input"/>
            {
                label ? (<label className={`${otherProps.value.length ? 'shrink' : ''}form-input-label`}>
                    {label}
                </label>):null
            }
        </div>
    )
}

export default FormInput;