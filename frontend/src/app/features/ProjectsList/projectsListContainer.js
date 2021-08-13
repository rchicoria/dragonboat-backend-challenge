import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  fetchLevelProjects,
  fetchChildProjects,
} from "../../store/projects/actions";
import { selectProjects } from "../../store/projects/selectors";

const container = (Component) => {
  return (props) => {
    const dispatch = useDispatch();

    const fetchProjects = () => dispatch(fetchLevelProjects(1));

    const projects = useSelector((state) => selectProjects(state));
    const projectsById = useSelector((state) => state.projects.byId);

    const onExpand = (id) => dispatch(fetchChildProjects(id));

    useEffect(() => {
      fetchProjects();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <Component
        {...props}
        projects={projects}
        projectsById={projectsById}
        onExpand={onExpand}
      />
    );
  };
};

export default container;
