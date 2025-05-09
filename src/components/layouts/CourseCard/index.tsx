import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type CourseCardProps = {
  id: number;
  image: string;
  title?: string;
  name?: string;
  star?: number;
  rating?: number;
  price?: number;
};

const CourseCard = ({
  id,
  image = "/images/coursefallback.jpg",
  title,
  name,
  star,
  rating,
  price,
}: CourseCardProps) => {
  return (
    <Link href={`/kursus/${id}`}>
      <Card className="pt-0 px-0 gap-2 group hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="p-0">
          <Image
            src={image}
            alt="course ajarin"
            width={400}
            height={150}
            className="rounded-t-xl w-full h-36 object-cover group-hover:opacity-80 transition-opacity duration-300"
          />
        </CardHeader>
        <CardContent className="px-3 space-y-2">
          <CardTitle className="text-lg md:text-xl leading-6 font-bold group-hover:text-primary transition-colors duration-300">
            {title}
          </CardTitle>
          <CardDescription className="text-sm md:text-base group-hover:text-gray-700 transition-colors duration-300">
            {name}
          </CardDescription>
        </CardContent>
        <CardFooter className="px-3 flex-col items-start gap-2">
          <div className="flex items-center gap-1">
            <p className="flex items-center gap-1 text-sm md:text-base">
              <Star className="size-4 md:size-5 text-yellow-500 group-hover:text-yellow-600 transition-colors duration-300" />{" "}
              {star}
            </p>

            <span className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
              ({rating || 0})
            </span>
          </div>

          <div className="font-semibold">${price?.toFixed(2) || "0.00"}</div>
        </CardFooter>
      </Card>
    </Link>
  );
};
export default CourseCard;
