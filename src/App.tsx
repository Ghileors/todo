import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
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
      <div className={classes.root}>
      <Switch>
        <Route path={'/registration'} exact component={RegistrationPage}/>        
        <Route path={'/login'} exact component={LoginPage} />          
        <Navbar />
        <Route path={'/todos'} exact component={TodosPage} />
        <Redirect to={'/registration'} exact/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
