import { Component } from "react";
import { LanguageContext } from "./LanguageContext";



export default class DisplayLanguage extends Component {
    render() {
        return (
            <LanguageContext.Consumer>
                {LanguageContext => <h1>{LanguageContext}</h1>}
            </LanguageContext.Consumer>
        )
    }
}