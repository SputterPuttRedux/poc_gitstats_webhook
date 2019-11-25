import React from "react";
import ReactDOM from "react-dom";

/* Import Components */
import HelloWorld from "./components/HelloWorld";
import ShowPost from "./components/ShowPost";

ReactDOM.render(<HelloWorld />, document.getElementById("main"));
ReactDOM.render(<ShowPost />, document.getElementById("show-post"));
