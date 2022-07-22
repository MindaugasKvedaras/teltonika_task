import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { users } from '../Home';

const SeniorFrontEndList = () => {

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

  const SeniorVueFrontenders = users.filter(user => {
    return user.category === "Front-end" && user.level === "Senior" && user.framework === "Vue";
  })
  
  const SeniorReactFrontenders = users.filter(user => {
    return user.category === "Front-end" && user.level === "Senior" && user.framework === "React";
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
  
  const exportSeniorVueFrontendersToJson = e => {
    e.preventDefault()
    downloadFile({
      data: JSON.stringify(SeniorVueFrontenders),
      fileName: 'Senior-Vue-Frontenders.json',
      fileType: 'text/json',
    });

    setIsExportedVue(true);
    setTimeout(() => {
      setIsExportedVue(false);
    }, 2500);

  }

  const exportSeniorReactFrontendersToJson = e => {
    e.preventDefault()
    downloadFile({
      data: JSON.stringify(SeniorReactFrontenders),
      fileName: 'Senior-React-Frontenders.json',
      fileType: 'text/json',
    });

    setIsExportedReact(true);
    setTimeout(() => {
      setIsExportedReact(false);
    }, 2500);

  }

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
                {SeniorVueFrontenders.slice(0,visibleVueTable).map((user) => (
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
    {visibleVueTable <= 3 & SeniorVueFrontenders.length > 3 ? (
       <div className='app_show-more-less_button'>
          <button onClick={showMoreItemsVueTable}>Show More</button>
       </div>
     ) : visibleVueTable >= 6 & visibleVueTable < SeniorVueFrontenders.length ? (
      <div className='app_show-more-less_button'>
          <button onClick={showMoreItemsVueTable}>Show More</button>
          <button onClick={showLessItemsVueTable}>Show Less</button>
      </div>
     ) : visibleVueTable === SeniorVueFrontenders.length || visibleVueTable > SeniorVueFrontenders.length ? (
      <div className='app_show-more-less_button'>
          <button onClick={showLessItemsVueTable}>Show Less</button>
      </div>
     ) : (
       null
     )} 
        </>
        ) : (
          <p className='app_no-table'>No Senior Vue.js Front-enders,<span> </span>
            <Link to="/">add</Link> new developer
          </p>
        )}
      <div className='app_json-btn'>
      {!isExportedVue ? (
            <button type='button' onClick={exportSeniorVueFrontendersToJson}>
              Export Senior-Vue.js data to JSON file
            </button>
          ) : (
            <p className="app_export-message">Successfully exported all data!</p>
        )}  
      </div>  
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
                {SeniorReactFrontenders.slice(0, visibleReactTable).map((user) => (
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
    {visibleReactTable <= 3 & SeniorReactFrontenders.length > 3 ? (
       <div className='app_show-more-less_button'>
          <button onClick={showMoreItemsReactTable}>Show More</button>
       </div>
     ) : visibleReactTable >= 6 & visibleReactTable < SeniorReactFrontenders.length ? (
      <div className='app_show-more-less_button'>
          <button onClick={showMoreItemsReactTable}>Show More</button>
          <button onClick={showLessItemsReactTable}>Show Less</button>
      </div>
     ) : visibleReactTable === SeniorReactFrontenders.length || visibleReactTable > SeniorReactFrontenders.length ? (
      <div className='app_show-more-less_button'>
          <button onClick={showLessItemsReactTable}>Show Less</button>
      </div>
     ) : (
       null
     )} 

        </>
        ) : (
          <p className='app_no-table'>No Senior React.js Front-enders,<span> </span>
            <Link to="/">add</Link> new developer
          </p>
        )}
      <div className='app_json-btn'>
      {!isExportedReact ? (
            <button type='button' onClick={exportSeniorReactFrontendersToJson}>
              Export Senior-React.js data to JSON file
            </button>
          ) : (
            <p className="app_export-message">Successfully exported all data!</p>
        )}  
      </div>  
      </div>
  )
}

export default SeniorFrontEndList;