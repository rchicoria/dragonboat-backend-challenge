// This model mocks a real database model for the sake com simplicity
const data = [
  {
    id: 1,
    title: "Project 1",
    parent: null,
    score: 0,
    children: null,
    childrenScore: null
  },
  {
    id: 2,
    title: "Project 2",
    parent: null,
    score: 0,
    children: null,
    childrenScore: null
  },
  {
    id: 3,
    title: "Project 3",
    parent: null,
    score: 0,
    children: null,
    childrenScore: null
  },
  {
    id: 4,
    title: "Project 4",
    parent: null,
    score: 0,
    children: null,
    childrenScore: null
  },
  {
    id: 5,
    title: "Project 5",
    parent: null,
    score: 0,
    children: null,
    childrenScore: null
  },
];
export default class {
  // receives conditions like { title: 'Project 5' } and returns a list of matches
  static findAll = (conditions = {}) => {
    return data
      .filter((obj) =>
        Object.entries(conditions).reduce((curr, [key, condition]) => {
          if (!curr) return false;
          return obj[key] === condition;
        }, true)
      )
      .sort((a, b) => (a.id > b.id ? 1 : -1));
  };

  // receives conditions like { title: 'Project 5' } and returns the first match
  static findOne = (conditions = {}) => {
    return data.find((obj) =>
      Object.entries(conditions).reduce((curr, [key, condition]) => {
        if (!curr) return false;
        return obj[key] === condition;
      }, true)
    );
  };

  // You can add more methods to this mock to extend its functionality or
  // rewrite it to use any kind of database system (eg. mongo, postgres, etc.)
  // it is not part of the evaluation process
}
