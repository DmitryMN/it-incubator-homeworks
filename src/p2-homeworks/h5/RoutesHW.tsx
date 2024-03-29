import {Routes, Route, Navigate} from "react-router-dom";
import React from "react";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus'
    // add paths
}

function RoutesHW() {
    return (
        <div>
            <Routes>
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
                {/*<Route path={'/'} render={() => <Redirect to={PATH.PRE_JUNIOR}/>*/}
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior />}></Route>

                {/*<Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>*/}
                // add routes
                <Route path={PATH.JUNIOR} element={<Junior />}></Route>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus />}></Route>

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path="/" element={<Navigate to={PATH.PRE_JUNIOR} />} />
                <Route path="*" element={<Error404 />}></Route>
            </Routes>
        </div>
    )
}

export default RoutesHW;