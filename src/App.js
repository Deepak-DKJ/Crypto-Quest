import { BrowserRouter, Route, Routes} from "react-router-dom"
import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import Coinpage from "./Pages/Coinpage";
import { makeStyles } from "@material-ui/core";
import Alert from './Components/Alert';
function App() {

  const useStyles = makeStyles(() =>({
    App: {
      backgroundColor: "#14161a",
      color: 'white',
      minHeight: "100vh"
    },
  }));

  const classes = useStyles();
  return (

    <BrowserRouter>
      <div className={classes.App}>
        <Header/>

        <Routes>
          <Route path = '/Crypto-Quest' Component={Homepage} exact/>
          <Route path = '/coins/:id' Component={Coinpage}/>
        </Routes>

      </div>
      <Alert/>
    </BrowserRouter>
  );
}

export default App;
