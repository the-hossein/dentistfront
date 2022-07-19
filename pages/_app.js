import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NextProgress from "next-progress";

import { store } from "../src/redux/store";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import RegisterPopUp from "../src/tools/popup/RegisterPopUp";
import "swiper/css";
import "swiper/css/scrollbar";

import "swiper/css/effect-fade";
import "swiper/css/pagination";

//set lang
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "fa",
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"]
    },
    backend: {
      loadPath: "/locales/{{lng}}/transliation.json"
    },
    react: {
      useSuspense: false
    }
  });

function MyApp({ Component, pageProps }) {
  const [showChild, setshowChild] = useState(false);
  useEffect(() => {
    setshowChild(true);
  }, []);
  if (!showChild) {
    return null;
  }
  return (
    <Provider store={store}>
      <NextProgress
        height={8}
        options={{ showSpinner: false }}
        color="var(--mainColor)"
      />
      <Component {...pageProps} />
      <ToastContainer />
      <RegisterPopUp />
    </Provider>
  );
}

export default MyApp;
