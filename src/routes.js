import React from 'react';
import HomePage from './containers/HomePage'
import GameContainer from './containers/GameContainer'

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/play',
        exact: false,
        main: () => <GameContainer />
    }
];

export default routes;