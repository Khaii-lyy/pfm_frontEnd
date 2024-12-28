import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { setGrades } from '../redux/studentActions'; 

const FormateurPage = () => {
 
  const student = { name: "John Doe", email: "john.doe@example.com" };

  
  const grades = useSelector((state) => state.student.grades); 
  const dispatch = useDispatch();

  
  const [temporaryGrades, setTemporaryGrades] = useState(grades);

  
  const handleGradeChange = (module, control, value) => {
    setTemporaryGrades((prevGrades) => ({//start with the previous state and apply modifications
      ...prevGrades,
      [module]: {
        ...prevGrades[module],//ensures the key is dynamically chosen based on the value of the module variable
        [control]: value
      }
    }));
  };

  const handleSubmit = () => {//keys from the temporaryGrades object
    Object.keys(temporaryGrades).forEach((module) => {//Object.keys(temporaryGrades) would return an array of the module names:
      Object.keys(temporaryGrades[module]).forEach((control) => {
        dispatch(setGrades(module, control, temporaryGrades[module][control]));//temporaryGrades[module][control]: the grade for that specific control 
      });
    });
  };

  
  const calculateAverage = (module) => {
    const controls = Object.values(temporaryGrades[module]);// converts the values of the object (the grades for each control) into an array.
    const total = controls.reduce((acc, val) => acc + (parseFloat(val) || 0), 0);//accumulate or combine the elements of an array into a single value.
    return (total / controls.length).toFixed(2); 
  };

  return (
    <div className="page-container">
      <h2>Welcome, Formateur</h2>
      <p>Student: {student.name}</p>
      <p>Email: {student.email}</p>

      <div className="grades-table">
        <h3>Grades Management</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Module</th>
              <th>Control 1</th>
              <th>Control 2</th>
              <th>Control 3</th>
              <th>Control 4</th>
              <th>Average</th>
            </tr>
          </thead>
          <tbody>
            {['database', 'react', 'agile', 'uml'].map((module) => (
              <tr key={module}>
                <td>{module.charAt(0).toUpperCase() + module.slice(1)}</td>
                {['control1', 'control2', 'control3', 'control4'].map((control) => (
                  <td key={control}>
                    <input
                      type="number"
                      value={temporaryGrades[module][control] || ''}
                      onChange={(e) =>
                        handleGradeChange(module, control, e.target.value)
                      }
                      className="form-control"
                    />
                  </td>
                ))}
                <td>{calculateAverage(module)}</td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      <button className="btn btn-primary" onClick={handleSubmit}>
        Save Grades
      </button>
    </div>
  );
};

export default FormateurPage;
