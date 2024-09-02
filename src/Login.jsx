import React from 'react'
import {Link} from 'react-dom'
import Main from './Main'
function Login() {
  return (
    <div className='login-container'>
          <input required className='input' placeholder='Enter Secrete Code' type='password'/>
          <button
           onClick={() =>{
              const secret = document.querySelector(".input").value
              

              if(secret == ""){
                alert("please input private key")
              }
              else{
                console.log(secret)
              }
            
           }}
          
          >Confirm</button>
    </div>
  )
}

export default Login