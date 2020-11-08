import React, { useEffect } from 'react';
import styled from "styled-components";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Notice from "./Notice";
import Board from "./Board";
import Gallery from "./Gallery";
import { appCreators } from "../../redux/actionCreators";
import COMMON_CONST from "../../assets/constant/common";

const Community = (props) => {

  const match = useRouteMatch();

  useEffect(()=>{
    appCreators.updateState({
      currentViewKey: COMMON_CONST.WHOLE_MENU_KEY.COMMUNITY,
    })
  },[])

  return (
    <Switch>
      <Route path={`${match.path}/board`} component={Board}/>
      <Route path={`${match.path}/gallery`} component={Gallery}/>
      <Route path={`${match.path}/notice`} component={Notice}/>
    </Switch>
  )
};

const Wrapper = styled.div`
`;

export default Community;