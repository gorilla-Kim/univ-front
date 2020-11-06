import React from 'react';
import styled from "styled-components";
import {Switch, Route} from "react-router-dom";
import BoardList from "./Board/BoardList";
import BoardDetail from "./Board/BoardDetail";
import BoardWrite from "./Board/BoardWrite";
import GalleryList from "./Gallery/GalleryList";
import GalleryDetail from "./Gallery/GalleryDetail";
import GalleryWrite from "./Gallery/GalleryWrite";
import NoticeList from "./Notice/NoticeList";
import NoticeDetail from "./Notice/NoticeDetail";
import NoticeWrite from "./Notice/NoticeWrite";

const Community = (props) => {

  return (
    <Switch>
      <Route to={'/board'} component={BoardList}/>
      <Route to={'/board/:id'} component={BoardDetail}/>
      <Route to={'/board/write'} component={BoardWrite}/>

      <Route to={'/gallery'} component={GalleryList}/>
      <Route to={'/gallery/:id'} component={GalleryDetail}/>
      <Route to={'/gallery/write'} component={GalleryWrite}/>

      <Route to={'/notice'} component={NoticeList}/>
      <Route to={'/notice/:id'} component={NoticeDetail}/>
      <Route to={'/notice/write'} component={NoticeWrite}/>
    </Switch>
  )
};

const Wrapper = styled.div`
`;

export default Community;