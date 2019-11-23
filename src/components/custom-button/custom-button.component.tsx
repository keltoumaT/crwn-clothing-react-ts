import React from "react";
import './custom-button.styles.scss';


interface IProps{
    type:any;
    children:string;
}

const CustomButton: React.FC<IProps> = ({children, ...otherprops}) =>{
    return(
        <button className="custom-button" {...otherprops}>{children}</button>
    )
}

export default CustomButton;