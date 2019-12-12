import React, { Fragment, useEffect } from "react";
import Searchbar from "./components/layout/Searchbar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModals";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

//import "./App.css";

const App = () => {
  // Init Materialize JS
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Fragment>
      <Searchbar />
      <div className='container'>
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
