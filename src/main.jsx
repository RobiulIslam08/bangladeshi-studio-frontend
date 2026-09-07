import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import axios from "axios";

// Axios Global Base URL for API calls
axios.defaults.baseURL = "https://backend.bangladeshistudeo.com/api/";
//axios.defaults.baseURL = "http://localhost:8000/api/";

// সাইটের মেইন ইউআরএল এর জন্য একটি গ্লোবাল ভেরিয়েবল সেট করুন
// এতে করে window.siteURL দিয়ে যেকোনো জায়গা থেকে কল করা যাবে
window.siteURL = "https://backend.bangladeshistudeo.com/";
//window.siteURL = "http://localhost:8000/";

window.user = JSON.parse(localStorage.getItem('user')) || {};

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Accept'] = 'application/json';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);