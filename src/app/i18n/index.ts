import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./resources";

i18next.use(initReactI18next).init({
	interpolation: { escapeValue: false }, // React already does escaping
	lng: "jp",
	resources: resources,
});

export default i18next;
