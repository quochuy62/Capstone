import "./App.css";
import { RouterProvider } from "react-router-dom";
import { GlobalStyle } from "./components/global-style/global-style";
import { router } from "./route";

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
