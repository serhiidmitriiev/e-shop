import { StyledEngineProvider } from "@mui/material";
import Main from "./view/pages/Main";
import Women from "./view/pages/Women";
import Men from "./view/pages/Men";
import Kids from "./view/pages/Kids";
import Product from "./view/pages/Product";
import Cart from "./view/pages/Cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";

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
