## Dragonboat Code Challenge - Please Fork this repo

The main purpose of this challenge is to evaluate the ability to add functionality to an existing codebase following the pre-existent stack and design patterns.

On the backend you will find a node.js 3-layer architecture (you may want to read more about it at https://dev.to/santypk4/bulletproof-node-js-project-architecture-4epf - read 3 layer architecture section and ignore the rest). The database layer was mocked with a model that reads and writes from/to a local object as it is not the main purpose of this challenge (you are free to replace by a Sequelize, Mongoose or any other tool). You can extend the existing API as you need in order to fit your needs.

On the frontend you will find a React/Redux project using:

- Reselect as selector library (https://github.com/reduxjs/reselect)
- Styled-Components as CSS-in-JS tool (https://styled-components.com)

Please avoid using patterns/libraries that overlap the purpose of the existing ones.

## Challenge Tasks

- Design and build a solution that supports a hierarchy within projects. A project may have another project as a parent and N projects as children. there's no depth limit.

- The user must be able to list the project hierarchy (level 1 projects, the children of those (level 2), level 3 and so on)

- The user must be able to change the parent (and level) of a project

- Each project has a score value (integer between 1 and 100)

- The user must be able to see the score of each project

- The user must be able to see the average score of the leaves of each branch of the project tree eg.


| Id | Name    | Parent | Score | Children Score |
|----|---------|--------|-------|----------------|
|  1 | L1-1    | null   | 50    | 30 |
|  2 | L1-2    | null   | 20    | 100 |
|  3 | L2-1    | 1      | 100   | 50 |
|  4 | L2-2    | 1      | 10    | null |
|  5 | L2-3    | 2      | 100   | null |
|  6 | L3-1    | 3      | 0     | null |
|  7 | L3-2    | 3      | 100   | null |

- The current implementation exposes a REST API. Please extend the current implementation to support any other kind of communication (eg. RPC, Message Queue, etc. - keep it simple(!)). You don't need to code an end-to-end solution, just make it clear for us that you understood the point. 

- Dockerize the solution

## Tips

- This is a Backend challenge with some light Frontend skills evaluation so you don't need to design complex client side solutions. Keep it simple on visualization

- Design your solution assuming each project can have hundreds or thousands of children

- Assume the data can be filtered and, in that case, the Children Score shouldn't change based on what data is displayed to the user



## How to run

The package.json was written to run on a UNIX environment. If you are working on a Windows environment please rewrite both package.json files properly.

Install the dependencies using `npm i` and run `npm start` in both `backend` and `front` directories two start the api and the frontend.
