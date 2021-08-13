import ProjectsService from "./projects.service";

export default class {
  getOne = (id) => {
    const service = new ProjectsService();

    return service.getOne(id);
  };

  getAll = (conditions) => {
    const service = new ProjectsService();

    return service.getAll(conditions);
  };
}
