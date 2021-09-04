// SNS topic fan out for updating project hierarchy

module.exports.eventClass = 'project';
module.exports.eventVerb = 'delete';

module.exports.handler = async (data) => {
  ProjectService.deleteProject(data.payload);
};
