import React from 'react';
import { users } from './Home';

const UserList = () => {

  const frontenders = users.filter(user => {
    return user.category === "Front-end";
  })
  
  const backenders = users.filter(user => {
    return user.category === "Back-end";
  })

  const fullStackDevelopers = users.filter(user => {
    return user.category === "Full-stack";
  })


  return (
    <div className='app_userlist-box'>
      <h1>All developers</h1>
          <table className='app_userlist-table'>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Developer category</th>
              <th>Email</th>
            </tr>
          {users?.map((user) => (
            <tr id="user-data">
              <td key={user.id}>{user.fName}</td>
              <td key={user.id}>{user.lName}</td>
              <td key={user.id}>{user.age}</td>
              <td key={user.id}>{user.gender}</td>
              <td key={user.id}>{user.category}</td>
              <td key={user.id}>{user.email}</td>
            </tr>
            ))}
          </table>
      <h1>Front-enders</h1>
        <table className='app_userlist-table'>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                {/* <th>Age</th>
                <th>Gender</th>
                <th>Developer category</th> */}
                <th>Email</th>
              </tr>
              {frontenders.map((user) => (
              <tr id="user-data">
                <td key={user.id}>{user.fName}</td>
                <td key={user.id}>{user.lName}</td>
                {/* <td key={user.id}>{user.age}</td>
                <td key={user.id}>{user.gender}</td>
                <td key={user.id}>{user.category}</td> */}
                <td key={user.id}>{user.email}</td>
              </tr>
              ))}
        </table>
        {backenders.length > 0 ? (
        <>
        <h1>Back-enders</h1>
        <table className='app_userlist-table'>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                {/* <th>Age</th>
                <th>Gender</th>
                <th>Developer category</th> */}
                <th>Email</th>
              </tr>
              {backenders.map((user) => (
              <tr id="user-data">
                <td key={user.id}>{user.fName}</td>
                <td key={user.id}>{user.lName}</td>
                {/* <td key={user.id}>{user.age}</td>
                <td key={user.id}>{user.gender}</td>
                <td key={user.id}>{user.category}</td> */}
                <td key={user.id}>{user.email}</td>
              </tr>
              ))}
        </table>
        </>
        ) : (
          null
        )}
        {fullStackDevelopers.length > 0 ? (
        <>
        <h1>Full-stack developers</h1>
        <table className='app_userlist-table'>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                {/* <th>Age</th>
                <th>Gender</th>
                <th>Developer category</th> */}
                <th>Email</th>
              </tr>
              {fullStackDevelopers.map((user) => (
              <tr id="user-data">
                <td key={user.id}>{user.fName}</td>
                <td key={user.id}>{user.lName}</td>
                {/* <td key={user.id}>{user.age}</td>
                <td key={user.id}>{user.gender}</td>
                <td key={user.id}>{user.category}</td> */}
                <td key={user.id}>{user.email}</td>
              </tr>
              ))}
        </table>
        </>
        ) : (
          null
        )}

      </div>
  )
}

export default UserList