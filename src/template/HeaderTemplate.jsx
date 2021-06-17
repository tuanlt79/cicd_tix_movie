import React from "react";
import Header from "../Component/Header/Header";
import { Route } from "react-router";
import Footer from "../Component/Footer/Footer";
export const HeaderTemplate = (props) => {
  let { Component, ...resRoute } = props;
  return (
    <Route
      {...resRoute}
      render={(propRoute) => {
        return (
          <div>
            <Header />
            <Component {...propRoute} />
            <Footer />
          </div>
        );
      }}
    />
  );
};
