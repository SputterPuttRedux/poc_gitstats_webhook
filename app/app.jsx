import React from "react";
import ReactDOM from "react-dom";

/* Import Components */
import HelloWorld from "./components/HelloWorld";
// import StateHook from "./components/StateHook";
import ShowPost from "./components/ShowPost";

ReactDOM.render(<HelloWorld />, document.getElementById("main"));
// ReactDOM.render(<StateHook />, document.getElementById("state-hook"));
ReactDOM.render(<ShowPost />, document.getElementById("show-post"));
