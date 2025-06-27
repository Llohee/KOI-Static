import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.tsx";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/18n.ts";
import { Toaster } from "./components/ui/sonner.tsx";
import ReactQueryProvider from "./providers/QueryClientProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <ReactQueryProvider>
          <App />
          <Toaster />
        </ReactQueryProvider>
      </I18nextProvider>
    </BrowserRouter>
  </StrictMode>
);
