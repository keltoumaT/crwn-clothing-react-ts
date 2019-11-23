import React from "react";
import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';


interface IState{
    email:string;
    password:string;
}


class SignIn extends React.Component<{},IState>{
    constructor(props:{}){
        super(props);
        this.state = {
            email:"",
            password:"",
        }
            
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        this.setState({
            email:"",
            password:"",
        })
        console.log(this.state);

    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const {value, name } = event.target;
        this.setState({
            [name]:value
        }as Pick<IState, keyof IState>)
        console.log(this.state);
    }


    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label="Email" type="email" name="email" value={this.state.email} handleChange={this.handleChange} required/>
                    <FormInput label="Password" type="password" name="password" value={this.state.password} handleChange={this.handleChange} required/>
                    <div className="buttons">
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                  
                        Sign in with Google
                    </CustomButton>
                    </div>


                </form>
            </div>
        )
    }

}

export default SignIn;
