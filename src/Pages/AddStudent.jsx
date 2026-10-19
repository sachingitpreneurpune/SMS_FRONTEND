import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import API from '../Service/API'

const AddStudent = () => {
     let navigate=useNavigate()
    
    let [student, setStudent] = useState({
        name: "",
        email: "",
        course: ""
    })
   

    function handleChange(e){
        // console.log(e.target.name)
        // console.log(e.target.value)
        setStudent({
            ...student,[e.target.name]:e.target.value
        })

    }

   async function handleSubmit(e){
        e.preventDefault();
        try{

        //    await axios.post("http://localhost:3000/students",student)
           await API.post("/students",student)
           alert("Student ADded Successfully...")
           navigate('/show')


        }catch(err){
            console.log(err)
        }
    }
    console.log(student)
    return (
        <div className='d-flex flex-column align-items-center'>
            <h1>Add Students</h1>
            <form className='w-25 p-5 border text-bg-primary text-center' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Enter Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Name" name='name' required onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Enter Email</label>
                    <input type="email" className="form-control" id="formGroupExampleInput2" placeholder="Enter Email" name='email' required onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Enter Course</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Course" name='course' required onChange={handleChange} />
                </div>
                <input type="submit" value="Add Student" />
            </form>
        </div>
    )
}

export default AddStudent