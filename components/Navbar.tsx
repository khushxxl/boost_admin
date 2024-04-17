"use client";
import React from "react";
import { ThemeToggler } from "./ThemeToggler";
import { useWeb3Modal } from "@web3modal/ethers/react";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { truncateWalletAddress } from "@/utils/constants";
function Navbar() {
  const { open, close } = useWeb3Modal();
  const { address, chainId, isConnected } = useWeb3ModalAccount();

  const connectWallet = async () => {
    open();
  };

  return (
    <div className="p-4">
      <div className="flex items-center space-x-4">
        <ThemeToggler />
        <div
          onClick={connectWallet}
          className="bg-gradient-to-r from-purple-500 to-pink-500  p-2 w-36 rounded-md text-white text-center cursor-pointer  flex items-center justify-center"
        >
          <p className="text-center">
            {isConnected ? truncateWalletAddress(address) : "Connect Wallet"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
