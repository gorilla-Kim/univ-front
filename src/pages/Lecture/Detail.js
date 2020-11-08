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
          to: '/lecture',
          title: 'Lecture'
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
           Lecture Detail
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default Detail;