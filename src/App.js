import React, { Fragment } from "react";

import { Route, Switch } from "react-router-dom";
import QAForm from "./components/Questions/QAForm";
import ReviewPage from "./components/Review/ReviewPage";

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
          <QAForm />
        </Route>
        <Route path="/review" exact>
          <ReviewPage />
        </Route>
      </Switch>
    </Fragment>
  );
};
export default App;
