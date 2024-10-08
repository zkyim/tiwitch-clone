"use client"

import { UserAvatar } from "@/app/(browse)/_components/sidebar/UserAvatar";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react";
import { UnblockButton } from "./UnblockButton";


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type BlockedUser = {
  id: string;
  userId: string;
  imageUrl: string;
  usernam: string;
  createdAt: string;
}

export const columns: ColumnDef<BlockedUser>[] = [
  {
    accessorKey: "username",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Username
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    cell: ({row}) => (
        <div className="flex items-center gap-x-4">
            <UserAvatar username={row.original.usernam} imageUrl={row.original.imageUrl} />
            <span>{row.original.usernam}</span>
        </div>
    )
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Date blocked
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },
  {
    accessorKey: "actions",
    cell: ({row}) => <UnblockButton userId={row.original.userId}/>
  },
]
