import React from "react";
import { Routes, Route } from "react-router-dom"
import routes from './routes'

function App() {
  return (
    <Routes>
      {routes?.map(i => (<Route key={i.name} path={i.path} exact={i.exact} element={<i.component />} />))}
    </Routes>
  );
}

export default App;
