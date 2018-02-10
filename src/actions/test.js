

export const setTest = () => ({ type:'TEST' });
export const getTest = () => {
  return dispatch => {
    dispatch(setTest());
  }
};