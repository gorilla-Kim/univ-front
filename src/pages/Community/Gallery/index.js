import React, { useEffect } from 'react';
import styled from "styled-components";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import GalleryWrite from "./GalleryWrite";
import GalleryDetail from "./GalleryDetail";
import GalleryList from "./GalleryList";
import { appCreators } from "../../../redux/actionCreators";

const Gallery = (props) => {

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
          title: 'Gallery'
        }
      ],
    })
  },[])

  return (
    <Switch>
      <Route path={`${match.path}/write`} component={GalleryWrite}/>
      <Route path={`${match.path}/:id`} component={GalleryDetail}/>
      <Route exact path={`${match.path}/`} component={GalleryList}/>
    </Switch>
  )
};

const Wrapper = styled.div`
`;

export default Gallery;