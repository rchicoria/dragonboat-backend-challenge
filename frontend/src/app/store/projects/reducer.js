import { FETCH_PROJECT, FETCH_PROJECTS, FETCH_LEVEL_PROJECTS } from "./types";

const initialState = {
  byId: {},
  ids: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS: {
      const data = action.payload || [];
      return {
        ...state,
        byId: data.reduce((byId, p) => ({ ...byId, [p.id]: p }), state.byId),
        ids: data.map((p) => p.id),
      };
    }
    case FETCH_PROJECT: {
      const data = action.payload;

      if (!data) return state;

      return {
        ...state,
        byId: {
          ...state.byId,
          [data.id]: data,
        },
      };
    }
    case FETCH_LEVEL_PROJECTS: {
      const data = action.payload || [];
      const byId = data.reduce((byId, p) => ({ ...byId, [p.id]: p }), {});
      const ids = data.map((p) => p.id);
      return {
        ...state,
        byId: { ...state.byId, ...byId },
        ids: Array.from(new Set([...state.ids, ...ids])),
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
