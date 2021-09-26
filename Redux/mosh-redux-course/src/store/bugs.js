import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import moment from "moment";
import { apiCallBegan } from "./api";

let lastId = 0;
const slice = createSlice({
  name: "bugs",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.list.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },

    bugResolved: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs.list[index].resolved = true;
    },

    bugAssignedToUser: (bugs, action) => {
      const { userId, bugId } = action.payload;
      const index = bugs.list.findIndex((bug) => bug.id === bugId);
      bugs.list[index].userId = userId;
    },

    bugRecived: (bugs, action) => {
      bugs.list = action.payload;
      bugs.loading = false;
      bugs.lastFetch = Date.now();
    },

    bugRequested: (bugs, action) => {
      bugs.loading = true;
    },

    bugRequestFailed: (bugs, actions) => {
      bugs.loading = false;
    },
  },
});

export const {
  bugAdded,
  bugResolved,
  bugAssignedToUser,
  bugRecived,
  bugRequested,
  bugRequestFailed,
} = slice.actions;
export default slice.reducer;

// Action creators
const url = "/bugs";
export const loadData = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.bugs;

  const diffInMinuts = moment().diff(moment(lastFetch), "minutes");

  if (diffInMinuts < 10) return;

  dispatch(
    apiCallBegan({
      url,
      onStart: bugRequested.type,
      onSuccess: bugRecived.type,
      onError: bugRequestFailed.type,
    })
  );
};

// Selectors

export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolved)
);

export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );
