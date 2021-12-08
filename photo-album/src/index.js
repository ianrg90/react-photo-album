import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import PhotosProvider from "./store/PhotosProvider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <PhotosProvider>
      <App />
    </PhotosProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
