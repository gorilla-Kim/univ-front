import React, { useEffect } from 'react';
import styled from "styled-components";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Alumni from "./Alumni";
import Current from "./Current";
import { appCreators } from "../../redux/actionCreators";
import COMMON_CONST from "../../assets/constant/common";

const Member = (props) => {

  useEffect(() => {
    appCreators.updateState({currentViewKey: COMMON_CONST.WHOLE_MENU_KEY.MEMBER})
  }, [])

  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/alumni`} component={Alumni}/>
      <Route path={`${match.path}/current`} component={Current}/>
    </Switch>
  )
};

const Wrapper = styled.div`
`;

export default Member;