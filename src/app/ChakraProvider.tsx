"use client";

import React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

export const ChakraUiProvider: React.FC<Props> = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
