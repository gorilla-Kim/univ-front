import React, { useEffect } from 'react';
import styled from "styled-components";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Honorship from "./Honorship";
import Research from "./Research";
import { appCreators } from "../../redux/actionCreators";
import COMMON_CONST from "../../assets/constant/common";

const Introduction = (props) => {

  useEffect(() => {
    appCreators.updateState({currentViewKey: COMMON_CONST.WHOLE_MENU_KEY.INTRODUCTION_RESEARCH})
  }, [])

  const match = useRouteMatch();

    return (
        <Switch>
          <Route path={`${match.path}/:id`} component={Honorship}/>
          <Route path={`${match.path}/research`} component={Research}/>
        </Switch>
    )
};

const Wrapper = styled.div`
`;

export default Introduction;