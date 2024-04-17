"use client";

import { NFTMetaData } from "@/utils/interfaces";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@radix-ui/react-popover";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { baseNFTData, lineaNFTS, zoraNFTS } from "@/utils/constants";

const NFTSelector = () => {
  const {
    options,
    selectedChain,
    setselectedChain,
    selectedNFTs,
    setselectedNFTs,
  } = useContext(AppContext);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">{selectedChain?.chain}</Button>
      </PopoverTrigger>
      <PopoverContent className="bg-black">
        <div className="w-[200px] p-4">
          {options?.map((data: any, i: number) => {
            return (
              <div
                onClick={() => {
                  setselectedChain(data);
                  if (data?.chain == "Base") {
                    setselectedNFTs(baseNFTData);
                  }
                  if (data?.chain == "Zora") {
                    setselectedNFTs(zoraNFTS);
                  }
                  if (data?.chain == "Linea") {
                    setselectedNFTs(lineaNFTS);
                  }
                }}
                className="mt-4 cursor-pointer text-white"
                key={i}
              >
                <h1>{data?.chain}</h1>
              </div>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export const columns: ColumnDef<NFTMetaData>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <div className="flex items-center">
          <h1 className="mr-4">NFT Name</h1>
          <NFTSelector />
        </div>
      );
    },
    cell: ({ renderValue, ...props }) => {
      const name = renderValue() as string;

      return <div className="">{name}</div>;
    },
  },
  {
    accessorKey: "address",
    header: "Contract Address",
  },
];
