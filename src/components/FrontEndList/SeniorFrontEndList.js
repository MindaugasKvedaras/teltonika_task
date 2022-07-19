import React from 'react';
import { Link } from "react-router-dom";
import { users } from '../Home';

const SeniorFrontEndList = () => {

  const SeniorVueFrontenders = users.filter(user => {
    return user.category === "Front-end" && user.level === "Senior" && user.framework === "Vue";
  })
  
  const SeniorReactFrontenders = users.filter(user => {
    return user.category === "Front-end" && user.level === "Senior" && user.framework === "React";
  })


  return (
    <div className='app_userlist-box'>
      <h1>Senior-Vue.js</h1>
      {SeniorVueFrontenders.length > 0 ? ( 
      <> 
      <div className="table">
        <table className='app_userlist-table'>
          <tbody>
            <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Developer category</th>
                  <th>Experience level</th>
                  <th>Framework</th>
                  <th>E-mail</th>
            </tr>
                {SeniorVueFrontenders.map((user) => (
                <tr id="user-data">
                  <td key={user.id}>{user.fName}</td>
                  <td key={user.id}>{user.lName}</td>
                  <td key={user.id}>{user.age}</td>
                  <td key={user.id}>{user.gender}</td>
                  <td key={user.id}>{user.category}</td>
                  <td key={user.id}>{user.level}</td>
                  <td key={user.id}>{user.framework}</td>
                  <td key={user.id}>{user.email}</td>
                </tr>
                ))}
          </tbody>
        </table>
        </div>
        </>
        ) : (
          <p>No Senior Vue.js Front-enders,<span> </span>
            <Link to="/">add</Link> new developer
          </p>
        )}
        <h1>Senior-React.js</h1>
        {SeniorReactFrontenders.length > 0 ? (
        <>
        <div className="table">
        <table className='app_userlist-table'>
          <tbody>
            <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Developer category</th>
                  <th>Experience level</th>
                  <th>Framework</th>
                  <th>E-mail</th>
            </tr>
                {SeniorReactFrontenders.map((user) => (
                <tr id="user-data">
                  <td key={user.id}>{user.fName}</td>
                  <td key={user.id}>{user.lName}</td>
                  <td key={user.id}>{user.age}</td>
                  <td key={user.id}>{user.gender}</td>
                  <td key={user.id}>{user.category}</td>
                  <td key={user.id}>{user.level}</td>
                  <td key={user.id}>{user.framework}</td>
                  <td key={user.id}>{user.email}</td>
                </tr>
                ))}
          </tbody>
        </table>
        </div>
        </>
        ) : (
          <p>No Senior React.js Front-enders,<span> </span>
            <Link to="/">add</Link> new developer
          </p>
        )}
      </div>
  )
}

export default SeniorFrontEndList;