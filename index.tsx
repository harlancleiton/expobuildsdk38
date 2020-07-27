import React from "react";

import { registerRootComponent } from "expo";

import App from "./src/App";

const ExpoBuild = () => {
  return <App />;
};

registerRootComponent(ExpoBuild);
