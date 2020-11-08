import React, { useEffect } from 'react';
import styled from "styled-components";
import { appCreators } from "../../redux/actionCreators";
import { useRouteMatch } from "react-router-dom";

const List = (props) => {

  const match = useRouteMatch();

  useEffect(()=>{
    appCreators.updateState({
      breadcrumbList:[
        {
          to: `${match.path}`,
          title: 'Lecture'
        }
      ],
    })
  },[])

    return (
        <Wrapper>
           Lecture List
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default List;