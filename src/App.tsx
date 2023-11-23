import "./App.css";
import { RouterProvider } from "react-router-dom";
import { GlobalStyle } from "./components/global-style/global-style";
import { router } from "./router";

function App() {
  return (
    <>
      <GlobalStyle>
        <RouterProvider router={router}/>
      </GlobalStyle>
    </>
  );
}

export default App;