import React from "react";
import './custom-button.styles.scss';


interface IProps{
    type?:any;
    children:string;
    onClick?: () => Promise<firebase.auth.UserCredential>; 
    isGoogleSignIn?:boolean;
}

const CustomButton: React.FC<IProps> = ({children, isGoogleSignIn, ...otherprops}) =>{
    return(
        <button className={`${isGoogleSignIn ? 'google-sign-in': ''} custom-button`}   {...otherprops}>{children}</button>
    )
}

export default CustomButton;