import React,{useState} from 'react'
import validator from 'validator';



const Register=(props)=>{

                const[email,setEmail]=useState('')
                const[password,setPassword]=useState('')
                const[confirm,setConfirm]=useState('')
                const[formErrors,setFormErrors]=useState({})
                const errors={}
                const handleEmail=(e)=>{
                    setEmail(e.target.value)
                }
                const handlePassword=(e)=>{
                    setPassword(e.target.value)
                }
                const handleConfirm=(e)=>{
                    setConfirm(e.target.value)
                }

                const formValidation=()=>{
                    if(!validator.isEmail(email)){
                        errors.email='Invalid Email'
                    }else if(email.trim().length===0){
                        errors.email='Field Should Be Entry'
                    }
                    
                    if(password.trim().length===0){
                        errors.password='Enter Password'
                    }else if(password.trim().length<8 && password.trim().length<128){
                        errors.password='Password Should min 8 max 128 charecters'
                    }
                    if(confirm.trim().length===0){
                        errors.confirm='Enter Password again'
                    }else if(confirm!==password){
                        errors.confirm='Wroung Match'
                    }


                    
                    
                }
                const handleSubmit=(e)=>{
                    e.preventDefault()
                    formValidation()
                    if(Object.keys(errors).length===0){
                        const data={
                            email:email,
                            password:password
                        }
                        console.log(data)
                        setFormErrors({})
                    }else{
                        setFormErrors(errors)
                    }
                    setEmail('')
                    setPassword('')
                    setConfirm('')
                   
                }
                return (
                    <div className='container d-flex justify-content-center'>
                        
                        <form className='col-md-8 mt-3' onSubmit={handleSubmit}>
                            <label className="form-label">Email </label><br/>
                            <input type='email'  className="form-control"  value={email} onChange={handleEmail}/>  
                            {
                                formErrors.email && <span style={{color:'red'}}>{formErrors.email} </span>
                            }<br/>
                            <label className="form-label">Password</label> <br/>
                            <input type='password'  className="form-control"  value={password} onChange={handlePassword}/>
                            {
                                formErrors.password && <span style={{color:'red'}}>{formErrors.password} </span>
                            }<br/>
                            <label className="form-label">Confirm Password </label>
                            <input type='password'  className="form-control"  value={confirm} onChange={handleConfirm} />
                            {
                                formErrors.confirm && <span style={{color:'red'}}>{formErrors.confirm} </span>
                            }
                            <input  className="form-control mt-3 btn-primary"  type='submit' value='submit' />
                            </form>
                            
                        </div>
                )

}


export default Register