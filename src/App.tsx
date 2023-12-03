import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "./components";
import React, { Suspense } from "react";
const LoginPage=React.lazy(()=> import("./pages/loginpage/LoginPage"))
const GetStarted =React.lazy(() => import("./pages/getstarted/GetStarted"));
const Register = React.lazy(() => import("./pages/registerpage/Register"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "/auth/register",
          element: (
            <Suspense fallback={<h1>Loading...</h1>}>
              <Register />
            </Suspense>
          ),
        },
        {
          path: "/auth/login",
          element: (
            <Suspense fallback={<h1>Loading...</h1>}>
              <LoginPage/>
            </Suspense>
          ),
        },
        {
          path: "/auth/getstarted",
          element: (
            <Suspense fallback={<h1>Loading...</h1>}>
              <GetStarted/>
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
