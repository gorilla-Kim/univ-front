import React, { useEffect } from 'react';
import styled from "styled-components";
import { appCreators } from "../../redux/actionCreators";
import { useRouteMatch } from "react-router-dom";

const Current = (props) => {

  const match = useRouteMatch();

  useEffect(()=>{
    appCreators.updateState({
      breadcrumbList:[
        {
          to: '',
          title: 'Member'
        },
        {
          to: `${match.path}`,
          title: 'Current Member'
        }
      ],
    })
  },[])

    return (
        <Wrapper>
           Current Member
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default Current;