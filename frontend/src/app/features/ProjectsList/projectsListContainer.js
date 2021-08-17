import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  fetchChildProjects,
  updateProject,
} from "../../store/projects/actions";
import { selectProjects } from "../../store/projects/selectors";

const container = (Component) => {
  return (props) => {
    const dispatch = useDispatch();

    const fetchProjects = () => dispatch(fetchChildProjects(-1));

    const projects = useSelector((state) => selectProjects(state));
    const projectsById = useSelector((state) => state.projects.byId);

    const onExpand = (id) => dispatch(fetchChildProjects(id));

    const onChangeParent = (id, parentId) =>
      dispatch(updateProject(id, { parent: parentId }));

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
        onChangeParent={onChangeParent}
      />
    );
  };
};

export default container;
