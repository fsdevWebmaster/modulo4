import { useState } from "react";
import { getLogin } from "../services/mainService";

type Props = {
  onLoginComplete: (token:string | false, userId:string | false) => void;
}

type LoginData = {
  username:string;
  password:string;
};

export const Login = ({ onLoginComplete }: Props) => {
  const [loginData, setLoginData] = useState<LoginData | undefined>();
  const [waitingVisible, setWaitingVisible] = useState<boolean>(false);
  const [error, setError] = useState<string | null>();

  const setBody = (e:React.ChangeEvent<HTMLInputElement>) => {
    let lData:any = { ...loginData };
    lData = { ...lData, [e.target.name]: e.target.value };
    setLoginData(lData);
  }

  const loginAttempt = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWaitingVisible(true);
    if (loginData) {
      getLogin(loginData?.username, loginData?.password).then((result) => {
        setError(null);
        setWaitingVisible(false);
        const { token } = result.data;
        const payload = token.split('.')[1];
        const data = JSON.parse(window.atob(payload));
        const userId = data.sub;
        localStorage.setItem("token", token);
        localStorage.setItem("userId", data.sub);        
        onLoginComplete(token, userId);
      }).catch((error) => {
        console.log("Login error:", error.code);
        setWaitingVisible(false);
        setError(error.message);
        onLoginComplete(false, false);
      });      
    }
  }

  return (
    <>
      <form className='login-form p-5' onSubmit={ (e) => loginAttempt(e) }>
        { waitingVisible && !error &&
          <p>Waiting for response...</p>
        }
        { error && 
          <p className="alert alert-danger">
            { error }
          </p>
        }
        <label htmlFor="username" className='my-2'>
          {/* should be type email ? */}
          <span>Username</span>
          <input 
            id="username"
            type="text" 
            name='username' 
            className='form-control' 
            onChange={ (e) => setBody(e) }
          />
        </label>
        <label htmlFor="password" className='my-2'>
          <span>Password</span>
          <input 
            id="password" 
            type="password" 
            name='password' 
            className='form-control' 
            onChange={ (e) => setBody(e) }
          />
        </label>

        <button className='btn btn-primary mt-3' type="submit">
          Login
        </button>
      </form>
    </>
  )
}