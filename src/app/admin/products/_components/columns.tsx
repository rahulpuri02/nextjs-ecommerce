import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {  MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button"
import Image from "next/image";
import { Product } from "@/types";
import Link from "next/link";
import { TableCell } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: 'thumbnail',
    header: 'Thumbnail',
    cell: ({row}) => {
      return (
        <TableCell className="hidden sm:table-cell">
    {row?.original?.thumbnail ? (    <Image
          alt={row.original.name}
          className="aspect-square rounded-md object-cover"
          height="64"
          src={row.original.thumbnail}
          width="64"
        />): <Skeleton className="w-16 h-16 rounded-md" />}
      </TableCell>
      )}
    },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "brand",
    header: "Brand",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => navigator.clipboard.writeText(String(row.original.id))}>
            Copy Product ID
          </DropdownMenuItem>
          <DropdownMenuSeparator />
         <Link href={`/admin/products/${row.original.id}`}>
         <DropdownMenuItem className="cursor-pointer">Edit Product</DropdownMenuItem>
         </Link>
        </DropdownMenuContent>
      </DropdownMenu>
      )
    }}
];
