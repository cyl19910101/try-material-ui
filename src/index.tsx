import * as React from "react";
import { render } from "react-dom";
import { withStyles } from "material-ui/styles";

const style = {
  title: {
    fontSize: "128px"
  },
  block: {
    background: "skyblue"
  }
};

// tslint:disable-next-line no-shadowed-variable typedef
const App = withStyles(style)(function App({ classes: { title, block } }) {
  return <div className={`${title} ${block}`}>Yo</div>;
});

render(<App />, document.getElementById("application"));
