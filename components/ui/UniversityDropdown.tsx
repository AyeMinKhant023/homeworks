"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

interface UniversityDropdownProps {
  id: number;
  name: string;
  state?: string;
  city: string;
  rank: number;
  description: string;
  website?: string;
  studentCount?: number;
  acceptance?: number;
  type?: string;
  imageUrl: string;
  onDelete: (id: number) => void;
}

export default function UniversityDropdown({
  id,
  name,
  state,
  city,
  rank,
  description,
  website,
  studentCount,
  acceptance,
  type,
  imageUrl,
  onDelete,
}: UniversityDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link
            href={{
              pathname: "/university/edit",
              query: {
                id: id.toString(),
                name,
                state,
                city,
                rank: rank.toString(),
                description,
                website,
                studentCount: studentCount?.toString(),
                acceptance: acceptance?.toString(),
                type,
                imageUrl,
              },
            }}
            className="flex items-center w-full"
          >
            <Pencil className="mr-2 h-4 w-4" />
            <span>Edit</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-red-600 focus:text-red-600 cursor-pointer"
          onClick={() => onDelete(id)}
        >
          <Trash2 className="mr-2 h-4 w-4" />
          <span>Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
