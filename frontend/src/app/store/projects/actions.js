import axios from "axios";

import { FETCH_PROJECTS, FETCH_PROJECT, FETCH_LEVEL_PROJECTS } from "./types";

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

export const fetchLevelProjects = (level) => {
  return async (dispatch) =>
    dispatch({
      type: FETCH_LEVEL_PROJECTS,
      payload: await axios.get("/projects", {
        params: {
          level
        }
      }).then((data) => data.data),
    });
};
