import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import UniversityDropdown from "./ui/UniversityDropdown";

interface UniversityCardProps {
  id: number;
  name: string;
  description: string;
  city: string;
  rank: number;
  imageUrl: string;
  user: { name: string } | null;
  onDelete: (id: number) => void;
  state?: string;
  studentCount?: number;
  acceptance?: number;
  type?: string;
  website?: string;
}

export function UniversityCard({
  id,
  name,
  description,
  city,
  rank,
  imageUrl,
  user,
  onDelete,
  state,
  studentCount,
  acceptance,
  type,
  website,
}: UniversityCardProps) {
  return (
    <Card className="w-full max-w-3xl overflow-hidden hover:shadow-lg transition-shadow relative">
      <div className="flex p-6 gap-6">
        <div className="relative w-48 h-32 rounded-lg overflow-hidden">
          <Image src={imageUrl} alt={name} fill className="object-cover" />
        </div>

        <div className="flex-1">
          <CardHeader className="p-0">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-semibold">{name}</h3>

              {user && user.name === "Admin" && (
                <UniversityDropdown
                  id={id}
                  name={name}
                  state={state}
                  city={city}
                  rank={rank}
                  description={description}
                  website={website}
                  studentCount={studentCount}
                  acceptance={acceptance}
                  type={type}
                  imageUrl={imageUrl}
                  onDelete={onDelete}
                />
              )}
            </div>
            <p className="text-sm text-gray-600 mt-1">{description}</p>
          </CardHeader>

          <CardContent className="p-0 mt-4">
            <div className="flex gap-4">
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-md">
                <span className="text-sm">City: {city}</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-md">
                <span className="text-sm">Rank: {rank}</span>
              </div>
            </div>
          </CardContent>

          <CardFooter className="p-0 mt-4">
            <Link href={`/university/${id}`}>
              <Button
                variant="outline"
                className="text-blue-600 hover:text-blue-700"
              >
                Read More
              </Button>
            </Link>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
