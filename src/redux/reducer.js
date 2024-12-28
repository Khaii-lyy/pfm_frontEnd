import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  absenceCount: 0,
  grades: {
    database: { control1: 0, control2: 0, control3: 0, control4: 0 },
    react: { control1: 0, control2: 0, control3: 0, control4: 0 },
    agile: { control1: 0, control2: 0, control3: 0, control4: 0 },
    uml: { control1: 0, control2: 0, control3: 0, control4: 0 },
  },
};


const SET_ABSENCE = 'SET_ABSENCE';
const SET_GRADES = 'SET_GRADES';


const studentReducer = (state, action) => {
  switch (action.type) {
    case SET_ABSENCE:
      return { ...state, absenceCount: action.payload };
    case SET_GRADES:
      const { module, control, score } = action.payload;
      return {
        ...state,
        grades: {
          ...state.grades,
          [module]: {
            ...state.grades[module],
            [control]: score,
          },
        },
      };
    default:
      return state;
  }
};


const StudentContext = createContext();//used to provide and consume the state (student data)


export const StudentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(studentReducer, initialState);

  return (
    <StudentContext.Provider value={{ state, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
};


export const useStudentContext = () => useContext(StudentContext);

export const setAbsence = (absenceCount) => ({
  type: SET_ABSENCE,
  payload: absenceCount,//data
});

export const setGrades = (module, control, score) => ({
  type: SET_GRADES,
  payload: { module, control, score },
});
