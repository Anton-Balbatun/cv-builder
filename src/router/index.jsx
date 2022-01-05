import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import {CvPageRoute} from "../components/CvPage/routes";
import {SettingsRoute} from "../components/Settings/routes";
import {JobSearchRoute} from "../components/JobSearch/routes";
import {DashboardRoute} from "../components/Dasboard/routes";
import {CvMenu} from "../components/CvMenu/CvMenu";


const ROUTES = [
    DashboardRoute,
    CvPageRoute,
    JobSearchRoute,
    SettingsRoute,
];

export const AppRoutes= () => (
    <BrowserRouter>
        <CvMenu/>
        <Routes>
            {ROUTES.map((route) => (
                <Route key={route.path} {...route} />
            ))}
        </Routes>
    </BrowserRouter>

);
