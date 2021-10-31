import classes from './Auth.module.css';
import { useRef } from 'react';


const Auth = (props) => {

  const emailRef= useRef();
  const passwordRef= useRef();

  
  const loginHandler = (e) =>{
    e.preventDefault();

    console.log(emailRef.current.value ,passwordRef.current.value.length)

    if(emailRef.current.value === 'abc@gmail.com' && passwordRef.current.value.length>3)
    {
      props.onLogin();
    }
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit = {loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref= {passwordRef}/>
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
