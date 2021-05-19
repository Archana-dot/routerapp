
import React, { useState } from 'react';

function StudentComponentList() {

    const [studentList, setStudentList] = useState([{ studentId: '14', studentName: 'meena', email: 'abcdef', city: 'knr', mark: '15' }, { studentId: '12', studentName: 'Arjun', email: 'eeeth', city: 'HashCha', mark: 20 }])
    function deleteItem(index) {
        if (window.confirm("Do you wish to delete this item?")) {
            let list = Object.assign([], studentList)
            list.splice(index, 1)
            setStudentList(list); 
        }
    }
    
    return (
        <div>
            <div className='header'>
                <button className='button' >Add</button>
            </div>






            <div className='popup'>
                <div className="popup-inner">
                    {/* <form id="login" action="index.html">
                        <input type="text" id="stid" name="studentid" maxlength="18" placeholder="studentid" />
                        <input type="text" id="stname" name="studentname" maxlength="18" placeholder="studentname" />
                        <input type="text" id="email" name="email" maxlength="18" placeholder="email" />
                        <input type="text" id="dept" name="department" maxlength="18" placeholder="department" />
                        <input type="text" id="city" name="city" maxlength="18" placeholder="city" />
                        <input type="number" id="mark" name="mark" maxlength="18" placeholder="mark " />
                        <a href="" className='button'>submit</a>
                    </form> */}
                </div>
            </div>


            <div className='body'>
                <table id='table'>
                    <thead>

                        <tr>
                            <th>Student Id</th>
                            <th>Student Name</th>
                            <th>Email Id</th>
                            <th>Mark</th>
                            <th>Department</th>
                            <th>City</th>
                            <th>Operation</th>
                        </tr>
                    </thead>

                    {studentList.map((item, index) => {
                        return (
                            <tbody key={index}>
                                <tr>
                                    <td>{item.studentId}</td>
                                    <td>{item.studentName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.city}</td>
                                    <td>{item.mark}</td>
                                    <button onClick={() => deleteItem(index)}>Remove</button>
                                </tr>

                            </tbody>)
                    })}



                </table>

            </div>
        </div>
    );
}

export default StudentComponentList;