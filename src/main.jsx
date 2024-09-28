import React from 'react'
import ReactDOM from 'react-dom/client'

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import './index.css'
import router from './Routes/router';
import AuthProvider from './Components/AuthProvider';

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
<QueryClientProvider client={queryClient}>
  <React.StrictMode >
      <AuthProvider>
 <RouterProvider  router={router} />
 </AuthProvider>
  </React.StrictMode>
  </QueryClientProvider>
  
)
