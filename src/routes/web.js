import React, { lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

/**
 * List of routes
 */
const routes = [
  {
    path: '/',
    component: lazy(() => import('@/pages/home')),
    exact: true
  },
  {
    path: '/users',
    component: lazy(() => import('@/pages/users')),
    exact: true
  },
  {
    path: '/albums',
    component: lazy(() => import('@/pages/albums'))
  },
  {
    path: '/photos',
    component: lazy(() => import('@/pages/photos'))
  },
  {
    component: lazy(() => import('@/pages/404'))
  }
]

/**
 * Web Common Routes
 * 
 * @param {Object} route 
 */
const CommonRoutes = (route) => (
  <Suspense fallback={false}>
    <Route path={route.path} render={props => ( 
      <route.component {...props} routes={route.routes} />
    )} />
  </Suspense>
)

/**
 * App router
 */
const WebRouter = props => (
  <Switch>
    {routes.map((route, key) => (
      <CommonRoutes key={key} {...route} />
    ))}
  </Switch>
)

export default WebRouter
