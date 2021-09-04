import Projects from "db/projects";
import Service from "../utils/Service";
import Pubsub from "../utils/Pubsub";

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

  findOneAndUpdate = async ({ id, children, parent }) => {
    /**
      Updating A's parent as B:
      - Update A's parent
      - Update B's children + children score

      Updating A's children as B:
      - Update A's children + children score
      - Update B's parent
    **/
  };

  deleteProject = async ({ id, limit = 25, offset = 0 }) => {
    /**
      Deleting project A:
      - Remove project A (as a child) from all parents with project A
      - Update children score for each parent project
      - Remove project A (as a parent) for all children of project A
      - Remove project A entry
    **/

    const bulkOps = [];

    // query for `{ children: { $in: projectA } }`
    // projects with projectA as a child
    const parentProjects = await Project.findAll({ children: { $in: id }, limit, offset });
    if (parentProjects?.length) {
      return;
    }

    // start paging for next results
    if (parentProjects >= limit) {
      // don't wait. just publish and let it do its thing
      this.sendPubsubMsg('delete', {
        id,
        limit,
        offset: offset + limit
      });
    }

    parentProjects.forEach(async (parentProject) => {
      try {
        await this.findOneAndUpdate({
          id,
          parent: {
            remove: parentProject.id
          }
        });
      } catch (err) {
        // log error + retry
      }
    });


    // query for `{ parent: { $in: projectA } }`
    // projects with projectA as a parent
    const childrenProjects = await Project.findAll({ parent: { $in: id }, limit, offset });
    if (childrenProjects?.length) {
      return;
    }

    if (childrenProjects >= limit) {
      // don't wait. just publish and let it do its thing
      this.sendPubsubMsg('delete', {
        id,
        limit,
        offset: offset + limit
      });
    }

    try {
      await this.findOneAndUpdate({
        id,
        children: {
          remove: childrenProjects.map(childProject => childProject.id)
        }
      });
    } catch (err) {
      // log error + retry
    }
  };

  sendPubsubMsg = (action, payload) => {
    Pubsub.publish('project', {
      action,
      payload
    });
  };
}
