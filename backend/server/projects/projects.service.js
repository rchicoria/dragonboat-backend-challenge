import Projects from "db/projects";
import Service from "../utils/Service";

import ObjectDoesNotExistError from "../utils/exceptions/ObjectDoesNotExistError";

export default class extends Service {
  getOne = (id) => {
    const project = Projects.findOne({ id });
    if (!project) throw new ObjectDoesNotExistError();

    return project;
  };

  getAll = (conditions) => {
    return Projects.findAll(conditions);
  };

  updateOne = (id, updates) => {
    const project = Projects.updateOne(id, updates);
    if (!project) throw new ObjectDoesNotExistError();

    return project;
  };
}
