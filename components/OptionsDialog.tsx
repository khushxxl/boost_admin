import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AppContext } from "@/context/AppContext";
import { abi } from "@/utils/constants";
import { NFTMetaData } from "@/utils/interfaces";
import { DialogClose } from "@radix-ui/react-dialog";
import {
  useWeb3Modal,
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { BrowserProvider, ethers } from "ethers";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

export default function OptionsDialog({ data }: { data?: NFTMetaData }) {
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { open, close } = useWeb3Modal();
  const connectWallet = async () => {
    open();
  };
  const { walletProvider } = useWeb3ModalProvider();
  const [whiteListAddress, setwhiteListAddress] = useState("");
  const [unlistAddress, setunlistAddress] = useState("");
  const {
    options,
    selectedChain,
    setselectedChain,
    selectedNFTs,
    setselectedNFTs,
  } = useContext(AppContext);
  const whitlistAddress = async () => {
    const whitlistAddress = whiteListAddress;
    const nftAddress = "0x03Ecfa361E7766811095017574dF1b44283d49B2";
    if (!isConnected) {
      connectWallet();
    }
    toast.loading("Listing in process", { id: nftAddress });
    const contractAddress = nftAddress; // Address of your contract
    const provider = new BrowserProvider(walletProvider);

    const signer = await provider.getSigner();

    const contract = new ethers.Contract(contractAddress, abi, provider);
    const gasLimit = 500000;
    try {
      const transaction = await contract
        .connect(signer)
        .addToAllowlist(whitlistAddress, {
          gasLimit: gasLimit,
        });

      await transaction.wait();

      console.log("Transaction sent:", transaction.hash);
      toast.success("Listed successfully", { id: nftAddress });
    } catch (error) {
      toast.error("Listing unsuccesfull", { id: nftAddress });

      console.error("Error executing function:", error);
    }
  };
  const unlist = async () => {
    const nftAddress = "0x03Ecfa361E7766811095017574dF1b44283d49B2";
    if (!isConnected) {
      connectWallet();
    }
    toast.loading("Unlisting in process", { id: nftAddress });
    const contractAddress = nftAddress; // Address of your contract
    const provider = new BrowserProvider(walletProvider);

    const signer = await provider.getSigner();

    const contract = new ethers.Contract(contractAddress, abi, provider);
    const gasLimit = 500000;
    try {
      const transaction = await contract
        .connect(signer)
        .removeFromAllowlist(unlistAddress, {
          gasLimit: gasLimit,
        });

      await transaction.wait();

      console.log("Transaction sent:", transaction.hash);
      toast.success("Unlisting successfully", { id: nftAddress });
    } catch (error) {
      toast.error("Unlisting unsuccesfull", { id: nftAddress });

      console.error("Error executing function:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Options</Button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle> Altering {selectedChain?.chain} Chain</DialogTitle>
          {/* <DialogDescription>
            Altering {selectedChain?.chain} Details
          </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center space-x-3">
            <Label htmlFor="whitlist" className="text-right">
              Whitlist Address
            </Label>
            <Input
              id="whitlist"
              autoFocus={false}
              defaultValue={""}
              className="col-span-3"
              onChange={(e) => setwhiteListAddress(e.target.value)}
            />
            <Button onClick={whitlistAddress}>Whitlist</Button>
          </div>
          <div className="flex items-center space-x-3">
            <Label htmlFor="unlist" className="text-right">
              Unlist Address
            </Label>
            <Input
              id="unlist"
              autoFocus={false}
              defaultValue={""}
              className="col-span-3"
              onChange={(e) => setunlistAddress(e.target.value)}
            />
            <Button onClick={unlist}>Unlist</Button>
          </div>
          {data && (
            <div className="flex items-center space-x-3">
              <Label htmlFor="address" className="text-right">
                Contract Address
              </Label>
              <Input
                id="address"
                defaultValue={data?.address}
                className="col-span-3"
              />
              <Button>Change</Button>
            </div>
          )}
        </div>
        <DialogClose className="flex justify-end mt-5">
          <Button>Close</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
