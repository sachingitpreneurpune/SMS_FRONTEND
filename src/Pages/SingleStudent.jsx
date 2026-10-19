import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import API from '../Service/API';

const SingleStudent = () => {
    let {id}=useParams()

     let[student,setStudent]=useState({});

    async function fetchStudent(){
        try{
          let response=await API.get(`/students/${id}`)
          console.log(response.data)
          setStudent(response.data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchStudent()
    },[])

  return (
    <div>
         <div className="row justify-content-evenly">
                 
                   
                         <div className="card col-12 col-md-6 col-xl-3 p-5 text-center text-bg-dark">
                    <div className="card-body">
                        <h5 className="card-title">Name: {student.name}</h5>
                        <h4 className="card-title">Email: {student.email}</h4>
                        <h4 className="card-title">Course: {student.course}</h4>

                        <Link to="/show">
                        <button className='btn btn-primary'>Back to Students</button>
                        </Link>
                        
                        
                    </div>
                </div>
                     
                    
                     
                   
            </div>
    </div>


  )
}

export default SingleStudent