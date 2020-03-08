import React, { lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

/**
 * List of routes
 */
const routes = [
  {
    path: '/',
    component: lazy(() => import('@/pages/Home')),
    exact: true
  },
  {
    path: '/users',
    component: lazy(() => import('@/pages/Users')),
    exact: true
  },
  {
    path: '/albums',
    component: lazy(() => import('@/pages/Albums'))
  },
  {
    path: '/photos',
    component: lazy(() => import('@/pages/Photos'))
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
