const initialState = {
  from: "",
  to: "",
  date: "",
  color: ""
};

const UPDATE_FROM = "UPDATE_FROM";

const UPDATE_TO = "UPDATE_TO";

const UPDATE_DATE = "UPDATE_DATE";

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FROM:
      return Object.assign({}, state, { from: action.payload, color: "red" });
    case UPDATE_TO:
      return Object.assign({}, state, { to: action.payload });
    case UPDATE_DATE:
      return Object.assign({}, state, { date: action.payload });
    default:
      return state;
  }
}
export function updateFrom(from) {
  return {
    type: UPDATE_FROM,
    payload: from
  };
}
export function updateTo(to) {
  return {
    type: UPDATE_TO,
    payload: to
  };
}
export function updateDate(date) {
  return {
    type: UPDATE_DATE,
    payload: date
  };
}
