import React, { useEffect } from 'react';
import styled from "styled-components";
import { appCreators } from "../../redux/actionCreators";
import { useRouteMatch } from "react-router-dom";

const Detail = (props) => {

  const match = useRouteMatch();

  useEffect(()=>{
    appCreators.updateState({
      breadcrumbList:[
        {
          to: `${match.path}`,
          title: 'Professor'
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
          Professor Detail
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default Detail;