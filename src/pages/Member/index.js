import React, { useEffect } from 'react';
import styled from "styled-components";
import {Switch, Route} from "react-router-dom";
import Alumni from "./Alumni";
import Current from "./Current";
import { appCreators } from "../../redux/actionCreators";
import COMMON_CONST from "../../assets/constant/common";

const Member = (props) => {

  useEffect(() => {
    appCreators.updateState({currentViewKey: COMMON_CONST.WHOLE_MENU_KEY.MEMBER})
  }, [])

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