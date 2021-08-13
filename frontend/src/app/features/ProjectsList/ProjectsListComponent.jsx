import React, { useRef } from "react";
import styled from "styled-components";

import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import Typography from "@material-ui/core/Typography";

const Component = ({ projects, projectsById, onExpand }) => {
  const renderItems = (ids) => (
    <>
      {ids.map((id) => (
        <>
          {projectsById[id] && (
            <TreeItem nodeId={id} label={projectsById[id].title}>
              {renderItems(projectsById[id].children)}
            </TreeItem>
          )}
        </>
      ))}
    </>
  );

  const expandedRef = useRef([]);

  const handleToggle = (event, nodeIds) => {
    if (expandedRef.current.length > nodeIds.length) return;
    const newIds = nodeIds.filter((id) => !expandedRef.current.includes(id));
    onExpand(newIds[0]);
  };

  const topLevelIds = projects.filter((p) => p.level === 1).map((p) => p.id);
  return (
    <>
      <Title variant="h4">Projects List</Title>
      <TreeView onNodeToggle={handleToggle}>
        {renderItems(topLevelIds)}
      </TreeView>
    </>
  );
};

const Title = styled(Typography)`
  padding: 20px 0 20px 13px;
`;

export default Component;
