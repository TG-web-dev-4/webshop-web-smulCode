import Home from "./pages/Home";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Reset from "./pages/Reset";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/theme";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Product/:id" element={<Product />} />
            <Route path="Login" element={<Login />} />
            <Route path="Register" element={<Register />} />
            <Route path="Reset" element={<Reset />} />
            <Route path="Dashboard" element={<Dashboard />} />
          </Routes>
        </ScrollToTop>
      </>
    </ThemeProvider>
  );
};

export default App;
