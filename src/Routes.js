import React from "react";
import { Route } from "react-router-dom";
import { Home, Gallery, FamilyTree, Writing, AllPhotos } from "./components";

const Routes = props => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/gallery" component={Gallery} />
    <Route path="/tree" component={FamilyTree} />
    <Route path="/writing" component={Writing} />
    <Route path="/photos" component={AllPhotos} />
  </div>
);

export default Routes;
