import { Router } from "express";

import RestControllerMixin from "../utils/RestControllerMixin";
import ProjectsController from "./projects.controller";

export default class extends RestControllerMixin(ProjectsController) {
  constructor() {
    super();
    const router = Router();

    router.get("/", async (req, res, next) => {
      try {
        const projects = await this.getProjects();

        return res.status(200).send(projects);
      } catch (err) {
        next(err);
      }
    });

    router.get("/:id", async (req, res, next) => {
      try {
        const project = await this.fetchProject(+req.params.id);

        return res.status(200).send(project);
      } catch (err) {
        next(err);
      }
    });

    // update parent or child
    router.put('/:id', validate('update-project'), async (req, res, next) => {
      try {
        const updatedProject = await this.updateProject(+req.params.id);

        return res.status(200).send(updatedProject);
      } catch (err) {
        next(err);
      }
    });

    this.router = router;
  }
}
