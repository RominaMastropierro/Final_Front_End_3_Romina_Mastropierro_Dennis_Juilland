import React, { createContext, useReducer, useEffect } from "react";

const initialState = {
  theme: "light", // Valor inicial del tema
  data: [] // Datos de la API
};

const AppContext = createContext();

function appReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "SET_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Agregar o eliminar la clase del tema oscuro en el body
  useEffect(() => {
    document.body.classList.toggle('dark', state.theme === 'dark');
  }, [state.theme]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
