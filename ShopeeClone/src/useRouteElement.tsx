import React from 'react'
import { useRoutes } from 'react-router-dom'
import MainLayout from './layouts/MainLaoyout'
import RegisterLayout from './layouts/RegisterLayout'
import Login from './page/Login'
import ProductList from './page/ProductList'
import Register from './page/Register'

export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    }
  ])
  return routeElement
}
