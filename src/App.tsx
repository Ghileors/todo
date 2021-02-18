import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import TodosPage from './pages/TodosPage';

import Navbar from './components/Navbar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Navbar />
      <div className={classes.root}>
      <Switch>
        <Route path={'/'} exact component={HomePage}/>
        <Route path={'/auth'} exact component={AuthPage}/>
        <Route path={'/create'} exact component={CreatePage}/>
        <Route path={'/todos'} exact component={TodosPage} />
        <Redirect to={'/auth'} exact/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
