import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoadingSpinner from "./components/ui/LoadingSpinner";

const Layout = React.lazy(() => import("./components/layout/Layout"));
const SearchPhotos = React.lazy(() => import("./pages/SearchPhotos"));
const PhotoAlbum = React.lazy(() => import("./pages/PhotoAlbum"));

function App() {
  return (
    <Suspense fallback = {<LoadingSpinner/>}>
      <Layout>
        <Switch>
          <Route path="/search" exact>
            <SearchPhotos />
          </Route>
          <Route path="/photos/:searchTopic">
            <PhotoAlbum />
          </Route>
          <Route path="*">
            <Redirect to="/search" />
          </Route>
        </Switch>
      </Layout>
    </Suspense>
  );
}

export default App;
