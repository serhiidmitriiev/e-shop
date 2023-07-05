import { BrowserRouter, Route, Routes } from "react-router-dom";

import { StyledEngineProvider } from "@mui/material";

import Cart from "./view/pages/Cart";
import Kids from "./view/pages/Kids";
import Main from "./view/pages/Main";
import Men from "./view/pages/Men";
import Product from "./view/pages/Product";
import Women from "./view/pages/Women";

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Main />} />
            <Route path="women" element={<Women />} />
            <Route path="men" element={<Men />} />
            <Route path="kids" element={<Kids />} />
            <Route path="cart" element={<Cart />} />
            <Route path="/:category/:productId" element={<Product />} />
          </Routes>
        </BrowserRouter>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
