import React, { useEffect } from 'react';
import styled from "styled-components";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import BoardWrite from "./BoardWrite";
import BoardDetail from "./BoardDetail";
import BoardList from "./BoardList";
import { appCreators } from "../../../redux/actionCreators";
import COMMON_CONST from "../../../assets/constant/common";

const Board = (props) => {

  const match = useRouteMatch();

  useEffect(()=>{
    appCreators.updateState({
      breadcrumbList:[
        {
          to: '',
          title: 'community'
        },
        {
          to: `${match.path}/`,
          title: 'Board'
        }
      ],
    })
  },[])

  return (
    <Switch>
      <Route path={`${match.path}/write`} component={BoardWrite}/>
      <Route path={`${match.path}/:id`} component={BoardDetail}/>
      <Route exact path={`${match.path}/`} component={BoardList}/>
    </Switch>
  )
};

const Wrapper = styled.div`
`;

export default Board;