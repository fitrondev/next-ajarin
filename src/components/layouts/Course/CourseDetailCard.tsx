import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Book, Clock, Star, Timer } from "lucide-react";
import Image from "next/image";

const CourseDetailCard = () => {
  return (
    <Card className="pt-0 pb-4 px-0 gap-4">
      <CardHeader className="p-0">
        <Image
          src={"/images/coursefallback.jpg"}
          alt=""
          width={400}
          height={240}
          className="rounded-t-xl w-full h-60 object-cover"
        />
      </CardHeader>
      <CardContent className="px-4 space-y-2 md:space-y-4">
        <div>
          <p className="text-red-500 text-sm flex items-center gap-2">
            <Timer className="size-5" />
            Tersisa 3 hari!
          </p>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-2xl md:text-3xl font-bold">$10.99</p>

          <p className="md:text-lg line-through text-muted-foreground">
            $20.00
          </p>

          <p className="md:text-lg text-muted-foreground">50% off</p>
        </div>

        <div className="text-xs md:text-sm text-muted-foreground flex items-center gap-2">
          <p className="flex items-center gap-2">
            <Star className="size-4 text-yellow-500" /> 4.5
          </p>

          <p>|</p>

          <p className="flex items-center gap-2">
            <Clock className="size-4" /> 30 hours
          </p>

          <p>|</p>

          <p className="flex items-center gap-2">
            <Book className="size-4" /> 45 Pelajaran
          </p>
        </div>

        <div>
          <Button size={"lg"} className="w-full">
            Beli Sekarang
          </Button>
        </div>
      </CardContent>
      <CardFooter className="px-4 flex-col items-start gap-2">
        <h3 className="md:text-lg font-semibold">
          Apa yang akan anda dapatkan?
        </h3>

        <ul className="list-disc list-inside text-xs md:text-sm">
          <li>Akses seumur hidup ke kursus ini.</li>
          <li>Panduan langsung, langkah demi langkah.</li>
          <li>Materi dan source code yang dapat diunduh.</li>
          <li>Quiz dan latihan untuk menguji pemahaman Anda.</li>
          <li>Sertifikat penyelesaian kursus yang dapat diunduh.</li>
        </ul>
      </CardFooter>
    </Card>
  );
};
export default CourseDetailCard;
