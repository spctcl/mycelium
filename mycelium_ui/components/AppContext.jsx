import { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();
const initalState = {
  test: 'test',
}

function reducer(state, action) {
  switch (action.type) {
    case 'changeTest':
      return { ...state, test: action.payload}
    default:
      throw new Error();
  }
}

export function AppWrapper({ children }) {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}