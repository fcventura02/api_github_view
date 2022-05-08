import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ResetCSS } from "./global/resetCSS";
import GithubProvider from "./providers/github-providers";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <GithubProvider>
            <ResetCSS />
            <App />
        </GithubProvider>
    </React.StrictMode>
);
