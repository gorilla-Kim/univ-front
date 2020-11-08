import React, { useEffect } from 'react';
import styled from "styled-components";
import {Switch, Route, useRouteMatch, Redirect} from "react-router-dom";
import List from "./List";
import Detail from "./Detail";
import { appCreators } from "../../redux/actionCreators";
import COMMON_CONST from "../../assets/constant/common";

const Publication = (props) => {

  const match = useRouteMatch();

  useEffect(() => {
    appCreators.updateState({currentViewKey: COMMON_CONST.WHOLE_MENU_KEY.PUBLICATION})
  }, [])

  return (
    <Switch>
      <Route exact to={'/'} component={List}/>
      <Route to={'/:id'} component={Detail}/>
    </Switch>
  )
};

const Wrapper = styled.div`
`;

export default Publication;