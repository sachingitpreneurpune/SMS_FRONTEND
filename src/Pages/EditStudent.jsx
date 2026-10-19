import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import API from '../Service/API';

const EditStudent = () => {
    let navigate=useNavigate()

    let {id}=useParams();
    let [student,setStudent]=useState({
        name:"",
        email:"",
        course:"",
        id:""
    });

    async function fetchData(){
        try{
         let response=await API.get(`/students/${id}`)
         console.log(response.data)
         setStudent(response.data)
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

    function handleChange(event){

        setStudent({
            ...student,[event.target.name]:event.target.value
        })

        
    }
    async function handleSubmit(event){
        event.preventDefault()
        try{
            alert("Student Updated")
          await API.put(`/students/${id}`,student)
          navigate("/show")
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div>
        <div className='d-flex flex-column align-items-center'>
            <h1>Add Students</h1>
            <form className='w-25 p-5 border text-bg-primary text-center' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Enter Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Name" name='name' required onChange={handleChange} value={student.name} />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Enter Email</label>
                    <input type="email" className="form-control" id="formGroupExampleInput2" placeholder="Enter Email" name='email' required onChange={handleChange} value={student.email} />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Enter Course</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Course" name='course' required onChange={handleChange} value={student.course} />
                </div>
                <input type="submit" value="Update Student" />
            </form>
        </div>
    </div>
  )
}

export default EditStudent