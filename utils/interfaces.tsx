import { ColumnDef } from "@tanstack/react-table";

export type NFTMetaData = {
  id: number;
  name: string;
  img: any;
  price: number;
  address: string;
};

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};
