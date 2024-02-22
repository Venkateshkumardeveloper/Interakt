import React, { useState } from 'react'
import styles from './User.module.css'
import { useNavigate } from 'react-router-dom';
import { GiTireIronCross } from "react-icons/gi";

import 'bootstrap/dist/css/bootstrap.min.css';




const Userdetails = () => {
    const navigate = useNavigate();

    // const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [formData,setFormData] =useState({
        username:'',
        email:'',
        phone:''
    })

    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    
    //     console.log("Form submitted with data:", formData);
    //     setFormData({
    //         username: "",
    //         email: "",
          
    //         phone: "",
           
    //       });
          
    //     };

        const handleSubmit = (e) => {
            e.preventDefault();
            console.log("Form submitted with data:", formData);
                setFormData({
                    username: "",
                    email: "",
                  
                    phone: "",
                   
                  });
        
            // Check if all fields are filled
            const isFormValid = Object.values(formData).every((field) => field.trim() !== '');
        
            if (isFormValid) {
              // Handle form submission (e.g., send data to server)
              // After successful submission, redirect to the home page
              navigate('/home');
            } else {
              alert('Please fill in all fields');
            }

            // setIsFormSubmitted(true);
          };

       function change(){
        navigate('/home');


       }
  

    
  return (
    <>
     <div className={styles.main}>
       
        <h2>User details</h2>
        <div className={styles.formdetails}>
        <form action="" onSubmit={handleSubmit} class="row row-cols-lg-auto g-3 align-items-center" >
            <label htmlFor="">
                <span>  Name:</span>
               
              
                <input type="text" 
                name='username'
                 value={formData.username}
                 onChange={handleInputChange}   placeholder='Full Name' required />
            </label>

            <label htmlFor="">
                <span>  Email:</span>
              
                <input type="email" placeholder='Email'
                value={formData.email}
                name='email'
                onChange={handleInputChange} required />
            </label>

            <label htmlFor="">
                <span>Mobile:</span>
                <input type="tel" maxLength={10} placeholder='mobileNo'
                name='phone' value={formData.phone} onChange={handleInputChange} required minLength={10} />
            </label>

             <input type="submit" className={styles.btn} />

            
        </form>
        <GiTireIronCross  className={styles.cross} onClick={change}/>

        </div>
     </div>
    </>
   
  )
}

export default Userdetails