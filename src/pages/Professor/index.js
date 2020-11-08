import React, { useEffect } from 'react';
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import List from "./List";
import Detail from "./Detail";
import { appCreators } from "../../redux/actionCreators";
import COMMON_CONST from "../../assets/constant/common";

const Professor = (props) => {

  useEffect(() => {
    appCreators.updateState({currentViewKey: COMMON_CONST.WHOLE_MENU_KEY.PROFESSOR})
  }, [])

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