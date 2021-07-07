import React,{useState} from "react";
import Home from "./components/Home";
import Form from "./components/Form";
import {Link,Route,Switch} from 'react-router-dom';
import styled from 'styled-components';


const App = () => {
  const [orders,setorders]=useState([]);

  const addOrder = order => {
    setorders([...orders, order]);
  }
  return (
    <AppContainer>
    
    <Switch>
      <Route path='/pizza'>
        <Form addOrder={addOrder} />
      </Route>
      <Route exact path='/'>
        <Home orders={orders} />
      </Route>
    </Switch>
  </AppContainer>
  );
};

const AppContainer=styled.div`
background-color=white;
`
export default App;
