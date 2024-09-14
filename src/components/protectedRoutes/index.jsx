// page A is login and Page B is publicly accessible.
// Page C, D, E are protected Pages can only be accessible if logged In true
// Page Not Found is when routes don't match: fallback
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import { routePath } from "./data";

const PrivateRoutes = ({ children, isLoggedIn = true }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  return children;
};

export const ProtectedRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routePath.map((route, index) => {
          return route.protected ? (
            <Route
              key={index}
              path={route.route}
              element={
                <PrivateRoutes>
                  <route.component />
                </PrivateRoutes>
              }
            ></Route>
          ) : (
            <Route
              key={index}
              path={route.route}
              element={<route.component />}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};
