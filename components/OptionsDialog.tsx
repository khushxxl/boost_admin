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
import { NFTMetaData } from "@/utils/interfaces";
import { DialogClose } from "@radix-ui/react-dialog";

export default function OptionsDialog({ data }: { data: NFTMetaData }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Options</Button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Make Changes</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center space-x-3">
            <Label htmlFor="whitlist" className="text-right">
              Whitlist Address
            </Label>
            <Input id="whitlist" defaultValue={""} className="col-span-3" />
            <Button>Whitlist</Button>
          </div>
          <div className="flex items-center space-x-3">
            <Label htmlFor="address" className="text-right">
              Contract Address
            </Label>
            <Input
              id="address"
              defaultValue={data.address}
              className="col-span-3"
            />
            <Button>Change</Button>
          </div>
        </div>
        <DialogClose className="flex justify-end mt-5">
          <Button>Close</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
