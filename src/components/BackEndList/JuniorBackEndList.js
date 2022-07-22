import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { users } from '../Home';

const JuniorFrontEndList = () => {

  const [visibleVueTable, setVisibleVueTable] = useState(3);
  const [visibleReactTable, setVisibleReactTable] = useState(3);
  const [isExportedVue, setIsExportedVue] = useState(false);
  const [isExportedReact, setIsExportedReact] = useState(false);

  const showMoreItemsVueTable = () => {
    setVisibleVueTable((prevValue) => prevValue  + 3);
  }

  const showLessItemsVueTable = () => {
    setVisibleVueTable((prevValue) => prevValue - 3);
  }

  const showMoreItemsReactTable = () => {
    setVisibleReactTable((prevValue) => prevValue  + 3);
  }

  const showLessItemsReactTable = () => {
    setVisibleReactTable((prevValue) => prevValue - 3);
  }

  const JuniorVueBackenders = users.filter(user => {
    return user.category === "Back-end" && user.level === "Junior" && user.framework === "Vue";
  })
  
  const JuniorReactBackenders = users.filter(user => {
    return user.category === "Back-end" && user.level === "Junior" && user.framework === "React";
  })

  const downloadFile = ({ data, fileName, fileType }) => {
    // Create a blob with the data we want to download as a file
    const blob = new Blob([data], { type: fileType })
    // Create an anchor element and dispatch a click event on it
    // to trigger a download
    const a = document.createElement('a')
    a.download = fileName
    a.href = window.URL.createObjectURL(blob)
    const clickEvt = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
    })
    a.dispatchEvent(clickEvt)
    a.remove()
  }
  
  const exportJuniorVueBackendersToJson = e => {
    e.preventDefault()
    downloadFile({
      data: JSON.stringify(JuniorVueBackenders),
      fileName: 'Junior-Vue-Backenders.json',
      fileType: 'text/json',
    });

    setIsExportedVue(true);
    setTimeout(() => {
      setIsExportedVue(false);
    }, 2500);

  }

  const exportJuniorReactBackendersToJson = e => {
    e.preventDefault()
    downloadFile({
      data: JSON.stringify(JuniorReactBackenders),
      fileName: 'Junior-React-Backenders.json',
      fileType: 'text/json',
    });

    setIsExportedReact(true);
    setTimeout(() => {
      setIsExportedReact(false);
    }, 2500);

  }

  return (
    <div className='app_userlist-box'>
      <h1>Junior-Vue.js</h1>
      {JuniorVueBackenders.length > 0 ? ( 
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
              {JuniorVueBackenders.slice(0, visibleVueTable).map((user) => (
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
    {visibleVueTable <= 3 & JuniorVueBackenders.length > 3 ? (
       <div className='app_show-more-less_button'>
          <button onClick={showMoreItemsVueTable}>Show More</button>
       </div>
     ) : visibleVueTable >= 6 & visibleVueTable < JuniorVueBackenders.length ? (
      <div className='app_show-more-less_button'>
          <button onClick={showMoreItemsVueTable}>Show More</button>
          <button onClick={showLessItemsVueTable}>Show Less</button>
      </div>
     ) : visibleVueTable === JuniorVueBackenders.length || visibleVueTable > JuniorVueBackenders.length ? (
      <div className='app_show-more-less_button'>
          <button onClick={showLessItemsVueTable}>Show Less</button>
      </div>
     ) : (
       null
     )} 
        </>
        ) : (
          <p className='app_no-table'>No Junior Vue.js Back-enders,<span> </span>
            <Link to="/">add</Link> new developer
          </p>
        )}
      <div className='app_json-btn'>
        {!isExportedVue ? (
            <button type='button' onClick={exportJuniorVueBackendersToJson}>
              Export Junior-Vue.js data to JSON file
            </button>
          ) : (
            <p className="app_export-message">Successfully exported all data!</p>
        )}  
      </div>  
        <h1>Junior-React.js</h1>
        {JuniorReactBackenders.length > 0 ? (
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
              {JuniorReactBackenders.slice(0, visibleReactTable).map((user) => (
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
    {visibleReactTable <= 3 & JuniorReactBackenders.length > 3 ? (
       <div className='app_show-more-less_button'>
          <button onClick={showMoreItemsReactTable}>Show More</button>
       </div>
     ) : visibleReactTable >= 6 & visibleReactTable < JuniorReactBackenders.length ? (
      <div className='app_show-more-less_button'>
          <button onClick={showMoreItemsReactTable}>Show More</button>
          <button onClick={showLessItemsReactTable}>Show Less</button>
      </div>
     ) : visibleReactTable === JuniorReactBackenders.length || visibleReactTable > JuniorReactBackenders.length ? (
      <div className='app_show-more-less_button'>
          <button onClick={showLessItemsReactTable}>Show Less</button>
      </div>
     ) : (
       null
     )} 
        </>
        ) : (
          <p className='app_no-table'>No Junior React.js Back-enders,<span> </span>
            <Link to="/">add</Link> new developer
          </p>
        )}
      <div className='app_json-btn'>
        {!isExportedReact ? (
            <button type='button' onClick={exportJuniorReactBackendersToJson}>
              Export Junior-React.js data to JSON file
            </button>
          ) : (
            <p className="app_export-message">Successfully exported all data!</p>
        )}  
      </div>  
      </div>
  )
}

export default JuniorFrontEndList;