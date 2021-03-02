import React, { Fragment, useReducer } from "react";
import Routes from "./components";
import { LayoutContext, layoutState, layoutReducer } from "./components/shop";

import { ToastContainer } from 'react-toastify';


function App() {
  const [data, dispatch] = useReducer(layoutReducer, layoutState);
  return (
    <Fragment>
      <LayoutContext.Provider value={{ data, dispatch }}>
        <Routes />
      <ToastContainer></ToastContainer>
      </LayoutContext.Provider>

    </Fragment>
  );
}

export default App;
