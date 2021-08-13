import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { fetchLevelProjects as fetchLevelProjectsAction } from "../../store/projects/actions";
import { selectProjects } from "../../store/projects/selectors";

const container = (Component) => {
  return (props) => {
    const dispatch = useDispatch();

    const fetchProjects = () => dispatch(fetchLevelProjectsAction(1));

    const projects = useSelector((state) => selectProjects(state));

    useEffect(() => {
      fetchProjects();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Component {...props} projects={projects} />;
  };
};

export default container;
