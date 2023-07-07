import { DELETE_USER, EDIT_USER, SUBMIT_USER, GET_KEYWORD } from "./constants";

const actDeleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};

const actEditUser = (user) => {
  return {
    type: EDIT_USER,
    payload: user,
  };
};

const actSubmitUser = (user) => {
  return {
    type: SUBMIT_USER,
    payload: user,
  };
};

const actGetKeyword = (keyword) => {
  return {
    type: GET_KEYWORD,
    payload: keyword,
  };
};

export { actDeleteUser, actEditUser, actSubmitUser, actGetKeyword };
