import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function DisplayLanguage() {
    const language = useContext(LanguageContext)
    return (<h1>{language}</h1>)
}