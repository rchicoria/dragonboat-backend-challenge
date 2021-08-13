import React, { useRef, useState } from "react";
import styled from "styled-components";

import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Component = ({ projects, projectsById, onExpand, onChangeParent }) => {
  const getChildIds = (parentId) =>
    projects.filter((p) => p.parent === parentId).map((p) => p.id);
  const renderItems = (ids) => (
    <>
      {ids.map((id) => (
        <>
          {projectsById[id] && (
            <TreeItem
              key={id}
              nodeId={String(id)}
              label={projectsById[id].title}
            >
              {renderItems(getChildIds(id))}
            </TreeItem>
          )}
        </>
      ))}
    </>
  );

  const [parentId, setParentId] = useState(-1);

  const expandedRef = useRef([]);
  const selectedRef = useRef(-1);

  const handleSubmit = (event) => {
    event.preventDefault();

    onChangeParent(selectedRef.current, parentId);
  };

  const handleChangeParentId = (event) => {
    setParentId(+event.target.value);
  };

  const handleToggle = (event, nodeIds) => {
    if (expandedRef.current.length > nodeIds.length) return;
    const newIds = nodeIds.filter((id) => !expandedRef.current.includes(id));
    if (newIds.length === 0) return;
    onExpand(newIds[0]);
    expandedRef.current = nodeIds;
  };

  const handleSelect = (event, nodeIds) => {
    const id = nodeIds;
    setParentId(projectsById[id].parent);
    selectedRef.current = +id;
  };

  const topLevelIds = getChildIds(-1);

  return (
    <>
      <Title variant="h4">Projects List</Title>
      <Form onSubmit={handleSubmit}>
        <TextField
          value={parentId}
          type="number"
          onChange={handleChangeParentId}
        />
        <Button type="submit">Change</Button>
      </Form>
      <TreeView onNodeToggle={handleToggle} onNodeSelect={handleSelect}>
        {renderItems(topLevelIds)}
      </TreeView>
    </>
  );
};

const Title = styled(Typography)`
  padding: 20px 0 20px 13px;
`;

const Form = styled.form`
  padding: 20px 0 20px 13px;
`;

export default Component;
