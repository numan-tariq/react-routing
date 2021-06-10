import React from "react";
import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>This is WELCOME PAGE</h1>
      <Route path="/welcome/new-user">
        <h3>Welcome, new user!</h3>
      </Route>
    </section>
  );
};

export default Welcome;
