import React from 'react';
import { useSelector } from 'react-redux'; 

const StudentPage = () => {
  
  const { absenceCount, grades } = useSelector((state) => state.student); 

  const calculateAverage = (module) => {
    const controls = Object.values(grades[module]);//method that returns an array of a given object's 
    const total = controls.reduce((acc, val) => acc + (parseFloat(val) || 0), 0); 
    return (total / controls.length).toFixed(2);
  };

  const calculateTotalAverage = () => {
    const modules = ['database', 'react', 'agile', 'uml'];
    const total = modules.reduce(
      (acc, module) => acc + parseFloat(calculateAverage(module)),
      0
    );
    return (total / modules.length).toFixed(2);
  };

  return (
    <div className="page-container">
      <h2>Student Page</h2>
      <p>Absence Count: {absenceCount}</p>
      <h3>Grades</h3>
      <table>
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
              <td>{module}</td>
              {['control1', 'control2', 'control3', 'control4'].map((control) => (
                <td key={control}>
                  <input
                    type="number"
                    value={grades[module][control] || ''}
                    readOnly
                    className="form-control"
                  />
                </td>
              ))}
              <td>{calculateAverage(module)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>Total Average: {calculateTotalAverage()}</h4>
    </div>
  );
};

export default StudentPage;
