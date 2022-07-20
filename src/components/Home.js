import React, { useState } from 'react';
import { olddevelopers } from '../developerdata/developers';


const newdevelopers = [];

export const users = [...olddevelopers, ...newdevelopers];


let nextId = 4;

const Home = () => {
    const [gender, setGender] = useState('Male');
    const [category, setCategory] = useState('Front-end');
    const [level, setLevel] = useState('Junior');
    const [framework, setFramework] = useState('Vue');
    const [formData, setFormData] = useState({id: '', fName: '', lName: '', age: '', category, gender, email: '', level, framework});

    const resetSelections = () => {
        setGender('');
        setCategory('');
        setLevel('');
        setFramework('');
    }

    const handleOnInputChange = (e) => {
        const { value, name } = e.target;
        setGender(e.target.value);
        setCategory(e.target.value);
    
        // merge previous formData with the new value from input
        setFormData({
          ...formData,
          [name]: value,
        })
      }
    
    const onSubmit = (e) => {

        e.preventDefault();
        const { fName, lName, age, gender, category, email, level, framework } = formData;
        newdevelopers.push({id: nextId, fName, lName, age, gender, category, email, level, framework });
        console.log(users);
        nextId++;
        setFormData({fName: '', lName: '', age: '', email: ''});
        resetSelections();
        e.target.reset();
    }

    return (
        <div className="app_developer-form">
        <h1>New developer</h1>
            <form onSubmit={onSubmit} className="app_user-form">
                    <input type="text" id="fname" name="fName" placeholder="First Name" required minLength="3" maxLength="15" onChange={handleOnInputChange}/>
                    <input type="text" id="lname" name="lName" placeholder="Last Name" required minLength="3" maxLength="15" onChange={handleOnInputChange}/>
                    <input type="email" id="email" name="email" placeholder="E-mail" required onChange={handleOnInputChange}/>
                    <input type="password" id="password" name="password" placeholder="Password" required onChange={handleOnInputChange}/>
                    <input type="number" id="age" name="age" minLength="16" maxLength="80" step="1" placeholder="Age" required onChange={handleOnInputChange}/>
                <p>Gender:</p>
                <label>
                    <input type="radio" id="malegender" name="gender" value="Male" checked={gender === 'Male'} onChange={handleOnInputChange} />
                    Male
                    <input type="radio" id="femalegender" name="gender" value="Female" checked={gender === 'Female'} onChange={handleOnInputChange} />
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
            </form>
        </div>
  );
}

export default Home;