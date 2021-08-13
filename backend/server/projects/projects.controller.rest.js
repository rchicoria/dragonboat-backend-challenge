import { Router } from "express";

import RestControllerMixin from "../utils/RestControllerMixin";
import ProjectsController from "./projects.controller";
import pick from "../utils/pick";

export default class extends RestControllerMixin(ProjectsController) {
  constructor() {
    super();
    const router = Router();

    router.get("/", async (req, res, next) => {
      try {
        const filter = pick(req.query, ["parent"]);
        if (filter.hasOwnProperty("parent")) {
          filter.parent = +filter.parent;
        }

        const projects = await this.getAll(filter);

        return res.status(200).send(projects);
      } catch (err) {
        next(err);
      }
    });

    router.get("/:id", async (req, res, next) => {
      try {
        const project = await this.getOne(+req.params.id);

        return res.status(200).send(project);
      } catch (err) {
        next(err);
      }
    });

    router.put("/:id", async (req, res, next) => {
      try {
        const project = await this.updateOne(+req.params.id, req.body);

        return res.status(200).send(project);
      } catch (err) {
        next(err);
      }
    });

    this.router = router;
  }
}
