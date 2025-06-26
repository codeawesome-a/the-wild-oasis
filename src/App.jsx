import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import Dashboard from './pages/Dashboard';
import Bookings from './pages/Bookings';
import Cabins from './pages/Cabins';
import Settings from './pages/Settings';
import Account from './pages/Account';
import Users from './pages/Users';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './ui/AppLayout';
export default function App() {
 const queryClinet = new QueryClient({
   defaultOptions:{
    queries:{
      staleTime:60 * 1000,
    }
   }
 })


  return (
    <>
    <QueryClientProvider client={queryClinet}>
      <ReactQueryDevtools initialIsOpen={false}/>
      <BrowserRouter>
          <Routes >
            <Route element = {<AppLayout/>}>
            <Route index element = {<Navigate replace to="dashboard"/>}/>
            <Route path='dashboard' element = {<Dashboard/>}/>
            <Route path='bookings' element = {<Bookings/>}/>
            <Route path='cabins' element = {<Cabins/>}/>
            <Route path='users' element = {<Users/>} />
            <Route path='settings' element = {<Settings/>}/>
            <Route path='account' element = {<Account/>} />
            </Route>
            <Route path='login' element = {<Login/>} />
            <Route path='*' element = {<PageNotFound />}/>
          </Routes>
      </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

