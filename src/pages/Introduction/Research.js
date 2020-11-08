import React, { useEffect } from 'react';
import styled from "styled-components";
import { appCreators } from "../../redux/actionCreators";
import { useRouteMatch } from "react-router-dom";

const Research = (props) => {

  const match = useRouteMatch();

  useEffect(()=>{
    appCreators.updateState({
      breadcrumbList:[
        {
          to: '',
          title: 'Introduction & Research'
        },
        {
          to: `${match.path}`,
          title: 'Research'
        }
      ],
    })
  },[])

    return (
        <Wrapper>
           Research
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default Research;