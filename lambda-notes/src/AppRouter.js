import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <SideBar />
        <Switch>
          <Route exact path="/" component={NoteList} />
          <Route exact path="/create" component={CreateNote} />
          <Route exact path="/:id" component={Note} />
          <Route exact path="/edit/:id" component={EditNote} />
        </Switch>
      </Router>
    );
  }
}