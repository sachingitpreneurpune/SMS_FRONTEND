import axios from 'axios';
import React, { useEffect, useState } from 'react'
import API from '../Service/API';
import {Link} from 'react-router-dom'

const ShowStudent = () => {

    let[students,setStudents]=useState([]);

    async function fetchStudent(){
        try{
        //   let response=await axios.get("http://localhost:3000/students")
          let response=await API.get("/students")
          console.log(response.data)
          setStudents(response.data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchStudent()
    },[])


    async function handlePatch(id){
       try{
           
           await API.patch(`/students/${id}`,{
            course:"Updated Course"
        })
        alert("COurse Updated")
        fetchStudent()
           
       }catch(err){
        console.log(err)
       }

    }

    async function handleDelete(id){
        let confirmMessage=window.confirm("Are you Sure?")
        if(confirmMessage){
            await API.delete(`/students/${id}`)
            fetchStudent();
        }
    }
    return (
        <div>
            <h1>Student Data</h1>
            <div className="row justify-content-evenly">
                 {
                    students.length >0 ?
                    (
                     students.map((student)=>(
                         <div className="card col-12 col-md-6 col-xl-3 p-5 text-center text-bg-dark">
                    <div className="card-body">
                        <h5 className="card-title">Name: {student.name}</h5>
                        <h4 className="card-title">Email: {student.email}</h4>
                        <h4 className="card-title">Course: {student.course}</h4>
                        
                          <button className='btn btn-success mx-1' onClick={()=>handlePatch(student.id)}>patch</button>
                          <button className='btn btn-danger mx-1' onClick={()=>handleDelete(student.id)}>Delete</button>

                       <Link to={`/edit/${student.id}`}>
                          <button className='btn btn-success mx-1' >Edit/Put</button>
                       </Link>


                          <Link to={`/single/${student.id}`}>
                          <button className='btn btn-primary mx-1' >View</button>
                          </Link>
                    </div>
                </div>
                     )
                    
                     
                    )) :
                    (<h1>Student Not Found</h1>)
                 }
            </div>
        </div>
    )
}

export default ShowStudent