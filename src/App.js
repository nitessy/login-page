import logo from './logo.svg';
import './App.css';
import photo from './photo.png'
import { useState } from 'react';

function App() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const [enteredPassword, setEnteredPassword] = useState('')
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);



const enteredEmailIsValid = enteredEmail.includes('@');
const enteredEmailIsInValid = !enteredEmailIsValid && enteredEmailTouched;

const enteredPasswordIsValid = enteredPassword.trim().length > 5 ;
const enteredPasswordIsInValid = !enteredPasswordIsValid && enteredPasswordTouched;

let formIsValid = false;

if(enteredEmailIsValid && enteredPasswordIsValid){
  formIsValid = true;
}

const emailHandler = (event) => {
  setEnteredEmail(event.target.value);
}
const passwordHandler = (event) =>{
  setEnteredPassword(event.target.value);
}
const emailBlurHandler = (event) =>{
  setEnteredEmailTouched(true);
}
const passwordBlurHandler = (event) =>{
  setEnteredPasswordTouched(true);
}

const submitHandler = (event) =>{
  event.preventDefault();
  setEnteredEmailTouched(true);
if (!enteredEmailIsValid || !enteredPasswordIsValid){
  return;
}
console.log(enteredEmail);
setEnteredEmail('');
setEnteredEmailTouched(false);

setEnteredPassword('');
setEnteredPasswordTouched(false)
}

  return (<>
    <h1> WELCOME!</h1>
      <h2>Enter credentials to login </h2>
    <div className='container'>
      
      <img src={photo}></img>
    <form onSubmit={submitHandler}>
      <div className='form-container'>
        <label htmlFor='email' >Email</label>
        <input
        type='email' pattern='[a-z0-9\W]+' id='email' onChange={emailHandler} onBlur={emailBlurHandler} value={enteredEmail}
         
        ></input>
        {enteredEmailIsInValid && (<p> Enter Valid Email</p>)}
      
        <label htmlFor='password' >password</label>
        <input
        type='password' id='email' onChange={passwordHandler} onBlur={passwordBlurHandler} value={enteredPassword}
        ></input>
        {enteredPasswordIsInValid && (<p> Enter Valid password</p>)}
      </div>
      <div className='form-actions'>
        <button> Submit</button>
      </div>
    </form>
    </div>
    </>
  );
}

export default App;
