import React from 'react';
import styled from "styled-components";
import {Switch, Route} from "react-router-dom";
import Alumni from "./Alumni";
import Current from "./Current";

const Member = (props) => {

  return (
    <Switch>
      <Route to={'/alumni'} component={Alumni}/>
      <Route to={'/current'} component={Current}/>
    </Switch>
  )
};

const Wrapper = styled.div`
`;

export default Member;