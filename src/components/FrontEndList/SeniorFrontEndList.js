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
                <tr key={user.id} id="user-data">
                  <td>{user.fName}</td>
                  <td>{user.lName}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                  <td>{user.category}</td>
                  <td>{user.level}</td>
                  <td>{user.framework}</td>
                  <td>{user.email}</td>
                </tr>
                ))}
          </tbody>
        </table>
        </div>
        </>
        ) : (
          <p className='app_no-table'>No Senior Vue.js Front-enders,<span> </span>
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
                <tr key={user.id} id="user-data">
                  <td>{user.fName}</td>
                  <td>{user.lName}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                  <td>{user.category}</td>
                  <td>{user.level}</td>
                  <td>{user.framework}</td>
                  <td>{user.email}</td>
                </tr>
                ))}
          </tbody>
        </table>
        </div>
        </>
        ) : (
          <p className='app_no-table'>No Senior React.js Front-enders,<span> </span>
            <Link to="/">add</Link> new developer
          </p>
        )}
      </div>
  )
}

export default SeniorFrontEndList;