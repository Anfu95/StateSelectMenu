import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@chakra-ui/core";
import SelectEstate from "./SelectEstate";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <SelectEstate />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);
