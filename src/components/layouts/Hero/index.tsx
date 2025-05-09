import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section>
      <div className="container h-[calc(100vh-4rem)] flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="flex-1 size-full flex flex-col md:items-center lg:items-start justify-center gap-2 md:gap-4">
          <h3 className="text-2xl md:text-5xl font-bold md:text-center lg:text-start">
            Bangun Masa Depanmu dengan Pembelajaran{" "}
            <span className="text-primary">Digital Terbaik</span>
          </h3>

          <p className="text-sm md:text-lg text-muted-foreground md:text-center lg:text-start">
            Temukan cara belajar yang fleksibel, terstruktur, dan menyenangkan
            hanya di Ajarin - platform LMS untuk generasi pembelajar masa kini.
          </p>

          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <Button size={"lg"} asChild>
              <Link href={"/register"}>Daftar Sekarang</Link>
            </Button>

            <Button size={"lg"} asChild>
              <Link href={"/kursus"}>
                Cari Kursus <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex-1 size-full flex flex-col items-center lg:justify-center">
          <Image
            src={"/images/hero.svg"}
            alt="ajarin undraw"
            width={550}
            height={550}
            className="size-auto sm:h-[350px] lg:size-auto object-cover animate-pulse"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
