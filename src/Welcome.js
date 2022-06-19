import React from "react";

function Welcome({ currName }) {
    return <h1>Hello, {currName === "" ? "INSERTNAME" : currName}!</h1>
}
export default Welcome;