import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {ToastContainer} from "react-toastify";
import {GoogleOAuthProvider} from "@react-oauth/google";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import store from "./redux/store.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId={import.meta.env["VITE_GOOGLE_CLIENT_ID"]}>
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <App />
    </GoogleOAuthProvider>
  </Provider>
);
