import React from 'react';
import styled from "styled-components";
import {Switch, Route, useRouteMatch, Redirect} from "react-router-dom";
import List from "./List";
import Detail from "./Detail";

const Publication = (props) => {

  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact to={'/list'} component={List}/>
      <Route to={'list/:id'} component={Detail}/>
    </Switch>
  )
};

const Wrapper = styled.div`
`;

export default Publication;