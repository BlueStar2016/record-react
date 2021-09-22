import React from 'react'
import {HashRouter, Redirect, Route ,Switch} from 'react-router-dom'
import Login from '../views/login/Login'
import NewsSandBox from '../views/sandbox/NewsSandBox'

function IndexRouter() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/" component={NewsSandBox}/>
                {/* <Route path="/" render={()=>
                    localStorage.getItem("token")?<NewsSandBox />:<Redirect to="/login"/>
                    }/> */}
            </Switch>
        </HashRouter>
    )
}

export default IndexRouter
