import Router from "./routers";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import NavigationScroll from "./layouts/NavigationScroll";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch } from "./stores/hooks";
import { setCurrentPage } from "./stores/reducers/Customization";
import { useEffect } from "react";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setCurrentPage(""));
  }, []);
  return (
    <>
      <StyledEngineProvider injectFirst>
        <NavigationScroll>
          <CssBaseline />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <Router />
        </NavigationScroll>
      </StyledEngineProvider>
    </>
  );
}

export default App;
