import React, { createContext, useReducer } from 'react';

const initialState = {
  isExtension: false,
  apiError: {
    state: false,
    messageId: 1,
  },
  activeMenu: '',
};

const RootStore = createContext(initialState);
const { Provider } = RootStore;

const RootProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'SET_ISEXTENSION':
        return {
          ...state,
          isExtension: action.payload,
        };
      case 'API_ERROR':
        return {
          ...state,
          apiError: action.payload,
        };
      case 'ACTIVE_MENU_ITEM':
        return {
          ...state,
          activeMenu: action.payload,
        };
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
export { RootStore, RootProvider };
