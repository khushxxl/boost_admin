"use client";
import { baseNFTData, lineaNFTS } from "@/utils/constants";
import React, { useState } from "react";

export const AppContext = React.createContext();

function AppProvider({ children }) {
  const options = [
    {
      img: require("../assets/zorb.png"),
      chain: "Zora",
      chainID: "0x76adf1",
    },
    { img: require("../assets/base.svg"), chain: "Base", chainID: "0x2105" },
    {
      img: require("../assets/linea.svg"),
      chain: "Linea",
      chainID: "0xe708",
    },
  ];
  const [selectedChain, setselectedChain] = useState(options[1]);
  const [selectedNFTs, setselectedNFTs] = useState(baseNFTData);
  return (
    <AppContext.Provider
      value={{
        options,
        selectedChain,
        setselectedChain,
        selectedNFTs,
        setselectedNFTs,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
