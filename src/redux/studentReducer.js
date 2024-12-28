const initialState = {
    absenceCount: 0,
    grades: {
      database: { control1: 0, control2: 0, control3: 0, control4: 0 },
      react: { control1: 0, control2: 0, control3: 0, control4: 0 },
      agile: { control1: 0, control2: 0, control3: 0, control4: 0 },
      uml: { control1: 0, control2: 0, control3: 0, control4: 0 },
    },
  };
  
  const studentReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ABSENCE':
        return { ...state, absenceCount: action.payload };
  
      case 'SET_GRADES': {
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
      }
  
      default:
        return state;
    }
  };
  
  export default studentReducer;
  