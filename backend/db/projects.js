// This model mocks a real database model for the sake com simplicity
const data = [
  {
    id: 11,
    title: "L1-1",
    score: 50,
    parent: -1,
  },
  {
    id: 12,
    title: "L1-2",
    score: 20,
    parent: -1,
  },
  {
    id: 21,
    title: "L2-1",
    score: 100,
    parent: 11,
  },
  {
    id: 22,
    title: "L2-2",
    score: 10,
    parent: 11,
  },
  {
    id: 23,
    title: "L2-3",
    score: 100,
    parent: 21,
  },
  {
    id: 31,
    title: "L3-1",
    score: 0,
    parent: 21,
  },
  {
    id: 32,
    title: "L3-2",
    score: 100,
    parent: 21,
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

  static updateOne = (id, updates) => {
    const instance = data.find((obj) => obj.id === id);
    if (!instance) return;

    Object.assign(instance, updates);

    return instance;
  };

  // You can add more methods to this mock to extend its functionality or
  // rewrite it to use any kind of database system (eg. mongo, postgres, etc.)
  // it is not part of the evaluation process
}
