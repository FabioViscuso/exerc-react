import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Languages = {
    English: 'Current Language: ',
    Italiano: 'Lingua Attuale: '
}
export function DisplayLanguage() {
    const language = useContext(LanguageContext)
    return (<h1>{Languages[language]}{language}</h1>)
}