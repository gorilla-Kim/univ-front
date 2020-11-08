import React, { useEffect } from 'react';
import styled from "styled-components";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Detail from "./Detail";
import List from "./List";
import { appCreators } from "../../redux/actionCreators";
import COMMON_CONST from "../../assets/constant/common";

const Lecture = (props) => {

  const match = useRouteMatch();

  useEffect(() => {
    appCreators.updateState({ currentViewKey: COMMON_CONST.WHOLE_MENU_KEY.LECTURE, })
  }, [])

  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/:id`} component={Detail}/>
      <Route exact path={`${match.path}/`} component={List}/>
    </Switch>
  )
};

const Wrapper = styled.div`
`;

export default Lecture;