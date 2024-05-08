import { Suspense, useState } from "react";
import "./App.css"
import Website from "./pages/Website";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./component/Layout/Layout";
import Properties from "./pages/Properties/Properties";
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from "react-query/devtools"
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css"
import Property from "./pages/Property/Property";
import LoginPage from "./component/LoginPage/LoginPage"; //login
import { MantineProvider } from "@mantine/core";
// import UserDetailContext from "./context/userDetailContext";

function App() {
  const queryClient = new QueryClient()
  // const [userDetails, setUserDetails] = useState({
  //   favourites: [],
  //   bookings: [],
  //   token: null
  // })

  return (
    // <UserDetailContext.Provider value={{userDetails, setUserDetails}}>
    <MantineProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/login" element={<LoginPage />} />

              <Route path="/" element={<Website />} />
              <Route path="/properties">
                <Route index element={<Properties />} />

                <Route path=":propertyId" element={<Property />} />
              </Route>
            </Route>

          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </MantineProvider>
    // </UserDetailContext.Provider> 
  );
}

export default App;
