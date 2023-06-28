import "./App.css";
import { StyledEngineProvider } from "@mui/material";
import Main from "./view/pages/Main";
import Women from "./view/pages/Women";
import Men from "./view/pages/Men";
import Kids from "./view/pages/Kids";
import Product from "./view/pages/Product";

// import { Provider } from "react-redux";
// import store from "./store/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        {/* <Provider store={store}> */}
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Main />} />
            <Route path="women" element={<Women />} />
            <Route path="men" element={<Men />} />
            <Route path="kids" element={<Kids />} />
            <Route path="/:category/:productId" element={<Product />} />
          </Routes>
        </BrowserRouter>
        {/* </Provider> */}
      </StyledEngineProvider>
    </div>
  );
}

export default App;
