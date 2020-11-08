import React, { useEffect } from 'react';
import styled from "styled-components";
import {Switch, Route} from "react-router-dom";
import Detail from "./Detail";
import List from "./List";
import { appCreators } from "../../redux/actionCreators";
import COMMON_CONST from "../../assets/constant/common";

const Lecture = (props) => {

  useEffect(() => {
    appCreators.updateState({currentViewKey: COMMON_CONST.WHOLE_MENU_KEY.LECTURE})
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

export default Lecture;