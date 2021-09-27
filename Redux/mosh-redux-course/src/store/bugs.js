import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import moment from "moment";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "bugs",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.list.push(action.payload);
    },

    bugResolved: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs.list[index].resolved = true;
    },

    bugAssignedToUser: (bugs, action) => {
      const { userId, id: bugId } = action.payload;
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

const {
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

export const addBug = (bug) =>
  apiCallBegan({
    url,
    method: "post",
    data: bug,
    onSuccess: bugAdded.type,
  });

export const resolveBug = (id) =>
  apiCallBegan({
    url: `/bugs/${id}`,
    method: "patch",
    data: { resolved: true },
    onSuccess: bugResolved.type,
  });

export const assignBugToUser = (bugId, userId) =>
  apiCallBegan({
    url: `${url}/${bugId}`,
    method: "patch",
    data: { userId },
    onSuccess: bugAssignedToUser.type,
  });

// Selectors

export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.list.filter((bug) => !bug.resolved)
);

export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.list.filter((bug) => bug.userId === userId)
  );
