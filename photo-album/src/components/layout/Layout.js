import { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <Fragment>
      <Header />
      <main className={classes.main}>{props.children}</main>
      <Route path="/search">
        <Footer />
      </Route>
    </Fragment>
  );
}

export default Layout;
