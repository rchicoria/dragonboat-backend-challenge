import axios from "axios";

import {
  FETCH_PROJECTS,
  FETCH_PROJECT,
  FETCH_CHILD_PROJECTS,
  UPDATE_PROJECT,
} from "./types";

export const fetchProjects = () => {
  return async (dispatch) =>
    dispatch({
      type: FETCH_PROJECTS,
      payload: await axios.get("/projects").then((data) => data.data),
    });
};

export const fetchProject = (id) => {
  return async (dispatch) =>
    dispatch({
      type: FETCH_PROJECT,
      payload: await axios.get(`/projects/${id}`).then((data) => data.data),
    });
};

export const fetchChildProjects = (parent) => {
  return async (dispatch) =>
    dispatch({
      type: FETCH_CHILD_PROJECTS,
      payload: await axios
        .get("/projects", {
          params: {
            parent,
          },
        })
        .then((data) => data.data),
    });
};

export const updateProject = (id, updates) => {
  return async (dispatch) =>
    dispatch({
      type: UPDATE_PROJECT,
      payload: await axios
        .put(`/projects/${id}`, updates)
        .then((data) => data.data),
    });
};
