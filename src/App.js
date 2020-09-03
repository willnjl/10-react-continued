import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Squares from "./components/01-lifting-state/01-Squares/Squares";
import SignUp from "./components/01-lifting-state/02-password/SignUp";
import Max from "./components/01-lifting-state/03-MaxCount/Max";
import Button from "./components/02-passing-data-up/Button";
import Form from "./components/02-passing-data-up/Form";
import Article from "./components/09-api/Article";
import CreateArticle from "./components/09-api/CreateArticle";
import Articles from "./components/09-api/Articles";
import history from "./history";

function App() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/news">
            <h1 className="display-3 text-dark">{"News"}</h1>
            <Articles />
          </Route>
          <Route exact path="/news/create">
            <CreateArticle />
          </Route>
          <Route
            exact
            path="/news/:id"
            render={({ match }) => <Article articleID={match.params.id} />}
          />
          <Route exact path="/">
            <Squares />
            <SignUp minimumLength={3} />
            <Max numbers={[0, 5, 10, 15]} max={25} />
            <Button handleUpdate={(count) => console.log(count)} />
            <Form
              handleSubmit={(object) => console.log(object)}
              fields={[
                { label: "Name", name: "name", type: "text" },
                { label: "E-mail", name: "email", type: "email" },
                { label: "Telephone Number", name: "telephone", type: "tel" },
                { label: "Date of Birth", name: "dob", type: "date" },
              ]}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
