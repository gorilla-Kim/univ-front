import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Switch, Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import Auth from './hoc/auth';
import Page404 from "./pages/Error/Page404";
import {appCreators} from "./redux/actionCreators";
import ToastMessage from "./components/ToastMessage/ToastMessage";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Introduction from "./pages/Introduction";
import Professor from "./pages/Professor";
import Member from "./pages/Member";
import Publication from "./pages/Publication";
import Lecture from "./pages/Lecture";
import Community from "./pages/Community";
import Layout from "./components/Layout/Layout";

const App = (props) => {

    const {toastMessage} = useSelector(state => state.app);
    const {isLoggedIn} = useSelector(state => state.user);

    useEffect(() => {

    }, [])

    return (
        <Wrapper>

            {
                toastMessage && <ToastMessage message={toastMessage}/>
            }

           <Layout>
               <Switch>
                   <Route exact path={'/'} component={Auth(Home, null)}/>

                   {/*<Route path={'/login'} component={Auth(Login, null)}/>*/}
                   {/*<Route path={'/register'} component={Auth(Register, null)}/>*/}

                   <Route path={'/introduction'} component={Auth(Introduction, null)}/>
                   <Route path={'/professor'} component={Auth(Professor, null)}/>
                   <Route path={'/member'} component={Auth(Member, null)}/>
                   <Route path={'/publication'} component={Auth(Publication, null)}/>
                   <Route path={'/lecture'} component={Auth(Lecture, null)}/>
                   <Route path={'/community'} component={Auth(Community, null)}/>

                   <Route path={'/error/404'} component={Auth(Page404, null)}/>
                   <Redirect to={'/error/404'}/>
               </Switch>
           </Layout>
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default App;