import ProjectsService from "./projects.service";

export default class {
  fetchProject = (id) => {
    const service = new ProjectsService();

    return service.getOne(id);
  };

  getProjects = () => {
    const service = new ProjectsService();

    return service.getAll();
  };

  updateProject = (details) => {
    const service = new ProjectsService();

    return service.findOneAndUpdate(details);
  };

  deleteProject = (id) => {
    const service = new ProjectsService();

    return service.deleteProject(id);
  };
}
