import React from 'react';
import { Link } from "react-router-dom";
import { users } from '../Home';

const JuniorFrontEndList = () => {

  const JuniorVueFrontenders = users.filter(user => {
    return user.category === "Front-end" && user.level === "Junior" && user.framework === "Vue";
  })
  
  const JuniorReactFrontenders = users.filter(user => {
    return user.category === "Front-end" && user.level === "Junior" && user.framework === "React";
  })


  return (
    <div className='app_userlist-box'>
      <h1>Junior-Vue.js</h1>
      {JuniorVueFrontenders.length > 0 ? ( 
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
              {JuniorVueFrontenders.map((user) => (
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
          <p>No Junior Vue.js Front-enders,<span> </span>
            <Link to="/">add</Link> new developer
          </p>
        )}
        <h1>Junior-React.js</h1>
        {JuniorReactFrontenders.length > 0 ? (
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
              {JuniorReactFrontenders.map((user) => (
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
          <p>No Junior React.js Front-enders,<span> </span>
            <Link to="/">add</Link> new developer
          </p>
        )}
      </div>
  )
}

export default JuniorFrontEndList;