import { timeConstants } from "../_constants";

export const officeIn = (time, locationPin) => (dispatch, getState) => {
  dispatch({
    type: timeConstants.OFFICE_IN,
    payload: { time, locationPin },
  });

  localStorage.setItem("time", JSON.stringify(getState().timeReducer));
};

export const officeOut = (time) => (dispatch, getState) => {
  dispatch({
    type: timeConstants.OFFICE_OUT,
    payload: { time },
  });

  localStorage.setItem("time", JSON.stringify(getState().timeReducer));
};

export const lunchIn = (time) => (dispatch, getState) => {
  dispatch({
    type: timeConstants.LUNCH_IN,
    payload: { time },
  });

  localStorage.setItem("time", JSON.stringify(getState().timeReducer));
};

export const lunchOut = (time) => (dispatch, getState) => {
  dispatch({
    type: timeConstants.LUNCH_OUT,
    payload: { time },
  });

  localStorage.setItem("time", JSON.stringify(getState().timeReducer));
};

export const break1In = (time) => (dispatch, getState) => {
  dispatch({
    type: timeConstants.BREAK1_IN,
    payload: { time },
  });

  localStorage.setItem("time", JSON.stringify(getState().timeReducer));
};

export const break1Out = (time) => (dispatch, getState) => {
  dispatch({
    type: timeConstants.BREAK1_OUT,
    payload: { time },
  });

  localStorage.setItem("time", JSON.stringify(getState().timeReducer));
};

export const break2In = (time) => (dispatch, getState) => {
  dispatch({
    type: timeConstants.BREAK2_IN,
    payload: { time },
  });

  localStorage.setItem("time", JSON.stringify(getState().timeReducer));
};

export const break2Out = (time) => (dispatch, getState) => {
  dispatch({
    type: timeConstants.BREAK2_OUT,
    payload: { time },
  });

  localStorage.setItem("time", JSON.stringify(getState().timeReducer));
};

export const break3In = (time) => (dispatch, getState) => {
  dispatch({
    type: timeConstants.BREAK3_IN,
    payload: { time },
  });

  localStorage.setItem("time", JSON.stringify(getState().timeReducer));
};

export const break3Out = (time) => (dispatch, getState) => {
  dispatch({
    type: timeConstants.BREAK3_OUT,
    payload: { time },
  });

  localStorage.setItem("time", JSON.stringify(getState().timeReducer));
};
