import React from 'react';
import styled from "styled-components";
import {Switch, Route} from "react-router-dom";
import List from "./List";
import Detail from "./Detail";

const Professor = (props) => {

  return (
    <Switch>
      <Route to={'/'} component={List}/>
      <Route to={'/:id'} component={Detail}/>
    </Switch>
  )
};

const Wrapper = styled.div`
`;

export default Professor;