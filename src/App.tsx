import { Route, Routes } from "react-router";
import "./i18n/18n";
import Layout from "./components/layout/index";
import { Home, NotFound } from "./pages";
import i18n from "./i18n/18n";
import React from "react";

function App() {
  return (
    <React.Fragment key={i18n.language}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
