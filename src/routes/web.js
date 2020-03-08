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
    component: lazy(() => import('@/pages/Albums')),
    exact: true
  },
  {
    path: '/albums/:albumsId',
    component: lazy(() => import('@/pages/Photos')),
    exact: true
  },
  {
    path: '/posts/:postId',
    component: lazy(() => import('@/pages/Detail')),
    exact: true,
    routes: []
  },
  {
    path: '/edit/:postId',
    component: lazy(() => import('@/pages/EditPost')),
    exact: true
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
