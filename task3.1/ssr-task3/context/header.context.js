import React, { createContext, useReducer } from 'react';

const initialState = {
  activeMenu: '',
};

const HeaderStore = createContext(initialState);
const { Provider } = HeaderStore;

const HeaderProvider = ({ children }) => {
  const [headerState, headerDispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'ACTIVE_MENU_ITEM':
        return {
          ...headerState,
          activeMenu: action.payload,
        };
    }
  }, initialState);

  return <Provider value={{ headerState, headerDispatch }}>{children}</Provider>;
};
export { HeaderStore, HeaderProvider };
