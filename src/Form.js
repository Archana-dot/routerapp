
import React, { useState } from "react";

function Form() {

  const [studentData, setStudentData] = useState([])
  const [studentId, setStudentId] = useState("")
  const [studentName, setStudentName] = useState("")
  const [email, setEmail] = useState("")
  const [city, setCity] = useState("")
  const [mark, setMark] = useState("")
  const [isEdit, setIsEdit] = useState(false)
  const [index, setIndex] = useState()
  const [searchItem, setSearchItem] = useState('')
  const [searchResult, setSearchResult] = ([])
  const addStudent = (e) => {
    let obj = {
      studentId: studentId,
      studentName: studentName,
      email: email,
      city: city,
      mark: mark,
      isEdit: false,
    }
    let arr = Object.assign([], studentData)
    if (isEdit) {
      arr[index] = obj;
    }

    else {
      arr.push(obj)
    }

    setStudentData(arr)
    setStudentId("")
    setStudentName("")
    setEmail("")
    setCity("")
    setMark("")
  }
  const deleteStudent = (e, index) => {
    let list = Object.assign([], studentData)
    list.splice(index, 1)
    setStudentData(list)
  }
  const editStudent = (e, index) => {
    setIsEdit(true);
    setIndex(index)
    setStudentId(studentData[index].studentId);
    setStudentName(studentData[index].studentName);
    setEmail(studentData[index].email);
    setCity(studentData[index].city);
    setMark(studentData[index].mark);
  }
  const searchStudent = (searchItem)=>{
    
    var newStudentData = studentData.find(a =>a.includes(searchItem));
    console.log(searchItem)

     setSearchItem(searchItem)
     if(searchItem!==''){
       
         return  Object.value(studentName)
         setSearchResult(newStudentData)
       }
      else {
       setSearchResult(studentData)
     }
  }
  const idchangehandler = e => { 
    setStudentId(e.target.value)
  }
  const namechangehandler = e => {
    setStudentName(e.target.value)
  }
  const emailchangehandler = e => {
    setEmail(e.target.value)
  }
  const citychangehandler = e => {
    setCity(e.target.value)
  }
  const markchangehandler = e => {
    setMark(e.target.value)
  }
  const searchchangehandler = e => {
    setSearchItem(e.target.value)
  }
  return (
    <div className="App">
      <div>
        <input
          name=""
          placeholder="type"
          onChange={(e) => searchchangehandler(e)}
        />
        <button onClick={(index) =>searchStudent(index)}>search</button>
      </div>
      <h3>Student Details </h3>
      <div className="box">
        <input
          name="StudentId"
          placeholder="Enter Id"
          onChange={(e) => idchangehandler(e)}
          value={studentId}
        />
        <input
          name="StudentName"
          placeholder="Enter Name"
          onChange={(e) => namechangehandler(e)}
          value={studentName}
        />
        <input
          name="Email"
          placeholder="Enter Email"
          onChange={(e) => emailchangehandler(e)}
          value={email}
        />
        <input
          name="City"
          placeholder="Enter City"
          onChange={(e) => citychangehandler(e)}
          value={city}
        />
        <input
          name="Mark"
          placeholder="Enter Mark"
          onChange={(e) => markchangehandler(e)}
          value={mark}
        />
        <button onClick={(e) => addStudent(e)}>Add</button>
      </div>
      <table id='table'>
        <thead>
          <tr>
            <th>Student Id</th>
            <th>Student Name</th>
            <th>Email Id</th>
            <th>Mark</th>
            <th>City</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.studentId}</td>
                <td>{item.studentName}</td>
                <td>{item.email}</td>
                <td>{item.mark}</td>
                <td>{item.city}</td>
                <td>
                  <button onClick={() => deleteStudent(index)}>delete</button>
                  <button onClick={(e) => editStudent(e, index)}>edit</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Form;
