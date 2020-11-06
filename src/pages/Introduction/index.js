import React from 'react';
import styled from "styled-components";
import {Switch, Route} from "react-router-dom";
import Honorship from "./Honorship";
import Research from "./Research";

const Introduction = (props) => {

    return (
        <Switch>
          <Route to={'/:id'} component={Honorship}/>
          <Route to={'/research'} component={Research}/>
        </Switch>
    )
};

const Wrapper = styled.div`
`;

export default Introduction;