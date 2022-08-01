import React, { useState } from 'react';
import Usersdata from '../developerdata/users.json';

const olddevelopersstring = JSON.stringify(Usersdata.users);
const olddevelopers = JSON.parse(olddevelopersstring);
export const users = [].concat(olddevelopers);

let nextId = 51;

const Home = () => {
    const [gender, setGender] = useState('Male');
    const [category, setCategory] = useState('Front-end');
    const [level, setLevel] = useState('Junior');
    const [framework, setFramework] = useState('Vue');
    const [formData, setFormData] = useState({id: '', fName: '', lName: '', age: '', category, gender, email: '', level, framework});
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const resetSelections = () => {
        setGender('');
        setCategory('');
        setLevel('');
        setFramework('');
    }

    const handleOnInputChange = (e) => {
        const { value, name } = e.target;
        // setGender(e.target.value);
        setCategory(e.target.value);

        // merge previous formData with the new value from input
        setFormData({
          ...formData,
          [name]: value,
        })
      }

    const handleOnInputChangeGender = (e) => {
        const { value, name } = e.target;
        setGender(e.target.value);

        setFormData({
            ...formData,
            [name]: value,
          })  
    }
    
    const onSubmit = (e) => {

        e.preventDefault();
        const { fName, lName, age, gender, category, email, level, framework } = formData;
        users.unshift({id: nextId, fName, lName, age, gender, category, email, level, framework });
        console.log(users);
        nextId++;
        setFormData({fName: '', lName: '', age: '', email: ''});
        resetSelections();
        e.target.reset();
        setIsFormSubmitted(true);
        setTimeout(() => {
            setIsFormSubmitted(false);
        }, 3500);
    }

    return (
       <> 
        <div className="app_developer-form">
        <h1>New developer</h1>
            <form onSubmit={onSubmit} className="app_user-form">
            {!isFormSubmitted ? (
                <>
                    <input type="text" id="fname" name="fName" placeholder="First Name" required minLength="3" maxLength="15" onChange={handleOnInputChange}/>
                    <input type="text" id="lname" name="lName" placeholder="Last Name" required minLength="3" maxLength="15" onChange={handleOnInputChange}/>
                    <input type="email" id="email" name="email" placeholder="E-mail" required onChange={handleOnInputChange}/>
                    <input type="password" id="password" name="password" placeholder="Password" required minLength="5" maxLength="15" onChange={handleOnInputChange}/>
                    <input type="number" id="age" name="age" minLength="16" maxLength="80" step="1" placeholder="Age" required onChange={handleOnInputChange}/>
                <p>Gender:</p>
                <label>
                    <input type="radio" id="malegender" name="gender" value="Male" checked={gender === 'Male'} onChange={handleOnInputChangeGender} />
                    Male
                    <input type="radio" id="femalegender" name="gender" value="Female" checked={gender === 'Female'} onChange={handleOnInputChangeGender} />
                    Female
                </label>
                <label>Developer category:
                    <select name="category" onChange={handleOnInputChange}>
                        <option id="frontend" value="Front-end">Front-end</option>
                        <option id="backend"  value="Back-end">Back-end</option>
                    </select>
                </label>
                <label>Experience level:
                    <select name="level" onChange={handleOnInputChange}>
                        <option id="junior" value="Junior">Junior</option>
                        <option id="senior"  value="Senior">Senior</option>
                    </select>
                </label>
                <label>Framework:
                    <select name="framework" onChange={handleOnInputChange}>
                        <option id="vue" value="Vue">Vue</option>
                        <option id="react"  value="React">React</option>
                    </select>
                </label>
                <input type="submit" value="Add developer" />
               </> 
            ) : (
                <div className='app_success-submitted-message_container'>
                    <h3 className="app_success-submitted-message">
                        Succesfully added new developer!
                    </h3>
                </div>  
            )}
            </form>
        </div> 
       </>   
  );
}

export default Home;