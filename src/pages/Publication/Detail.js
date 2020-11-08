import React, { useEffect } from 'react';
import styled from "styled-components";
import { appCreators } from "../../redux/actionCreators";
import { useRouteMatch } from "react-router-dom";

const Detail = (props) => {

  const match = useRouteMatch();

  console.log('@@ match', match);

  useEffect(()=>{
    appCreators.updateState({
      breadcrumbList:[
        {
          to: `${match.path}`,
          title: 'Publication'
        },
        {
          to: `${match.path}/${match.params.id}`,
          title: `${match.params.id}`
        }
      ],
    })
  },[])

    return (
        <Wrapper>
          Publication Detail
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default Detail;