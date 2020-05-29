import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@chakra-ui/core";
import Equipos from "./SelectEstate";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Equipos />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);
