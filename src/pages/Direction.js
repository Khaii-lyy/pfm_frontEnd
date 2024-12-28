import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAbsence } from '../redux/studentActions'; 

const DirectionPage = () => {
  const student = { name: "John Doe", email: "john.doe@example.com" };

  
  const absenceCount = useSelector((state) => state.student.absenceCount); // Adjust to match the structure of your Redux store
  const dispatch = useDispatch();

  const addAbsence = () => {
    dispatch(setAbsence(absenceCount + 1)); // Use the setAbsence action creator
  };

  const removeAbsence = () => {
    if (absenceCount > 0) {
      dispatch(setAbsence(absenceCount - 1)); // Use the setAbsence action creator
    }
  };

  return (
    <div className="page-container">
      <h2>Welcome, Direction</h2>

      <div className="absence-management">
        <h3>Absence Management</h3>
        <p>Student: {student.name}</p>
        <p>Email: {student.email}</p>

        <table className="table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Absences</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{student.name}</td>
              <td>{absenceCount}</td>
              <td>
                <button className="btn btn-success" onClick={addAbsence}>
                  Add Absence
                </button>
                <button className="btn btn-danger" onClick={removeAbsence}>
                  Remove Absence
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="timetable-management">
        <h3>Timetable (Emploi du Temps)</h3>
        <div className="timetable-embed">
          <iframe
            src="https://linktr.ee/istalazaret"
            width="100%"
            height="400"
            frameBorder="0"
            title="Timetable"
          ></iframe>
        </div>
        <button className="btn btn-primary mt-3">Update</button>
      </div>
    </div>
  );
};

export default DirectionPage;
