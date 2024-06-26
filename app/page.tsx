"use client";
import Image from "next/image";
import { columns } from "@/components/columns";
import { baseNFTData } from "@/utils/constants";
import DataTable from "../components/MainTable";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import OptionsDialog from "@/components/OptionsDialog";

export default function Home() {
  const { selectedNFTs, setselectedNFTs } = useContext(AppContext);
  return (
    <main className="h-screen max-w-7xl flex-col flex items-center mx-auto">
      <h1 className="text-3xl font-bold tracking-wide font-mono">
        Boost Admin Panel
      </h1>
      <div className="flex self-end mt-10">
        <OptionsDialog />
      </div>
      <DataTable columns={columns} data={selectedNFTs} />
    </main>
  );
}
