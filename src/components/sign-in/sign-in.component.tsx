import React from "react";
import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';


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

    handleSubmit = async  (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();

        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
               email:'',
               password: '', 
            })
        }
        catch(error){
            console.log(error);
        }


        this.setState({
            email:"",
            password:"",
        })

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
