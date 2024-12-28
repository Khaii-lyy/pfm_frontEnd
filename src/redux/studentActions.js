export const SET_ABSENCE = 'SET_ABSENCE';
export const SET_GRADES = 'SET_GRADES';

export const setAbsence = (absenceCount) => ({
  type: SET_ABSENCE,
  payload: absenceCount,
});

export const setGrades = (module, control, score) => ({
  type: SET_GRADES,
  payload: { module, control, score },
});
