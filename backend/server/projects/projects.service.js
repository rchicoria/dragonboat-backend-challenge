import Projects from "db/projects";
import Service from "../utils/Service";

import ObjectDoesNotExistError from "../utils/exceptions/ObjectDoesNotExistError";

export default class extends Service {
  getOne = (id) => {
    const project = Projects.findOne({ id });
    if (!project) throw new ObjectDoesNotExistError();

    return project;
  };

  getAll = () => {
    return Projects.findAll();
  };

  findOneAndUpdate = (id) => {
    /**
      Updating A's parent as B:
      - Update A's parent
      - Update B's children + children score

      Updating A's children as B:
      - Update A's children + children score
      - Update B's parent
    **/
  };

  deleteProject = (id) => {
    /**
      Deleting project A:
      - Remove project A (as a child) from all parents with project A
      - Update children score for each parent project
      - Remove project A (as a parent) for all children of project A
      - Remove project A entry
    **/
  };
}
