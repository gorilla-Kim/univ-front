import React from 'react';
import styled from "styled-components";
import {Switch, Route} from "react-router-dom";
import Detail from "./Detail";
import List from "./List";

const Lecture = (props) => {

  return (
    <Switch>
      <Route to={'/'} component={List}/>
      <Route to={'/:id'} component={Detail}/>
    </Switch>
  )
};

const Wrapper = styled.div`
`;

export default Lecture;