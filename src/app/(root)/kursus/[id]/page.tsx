import CourseAccordion from "@/components/layouts/Course/CourseAccordion";
import CourseDetailCard from "@/components/layouts/Course/CourseDetailCard";
import { Star } from "lucide-react";
import Link from "next/link";

const DetailCoursePage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  console.log("ID", id);
  return (
    <section className="py-5 md:py-10 lg:py-20">
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-5 md:space-y-10">
          <div className="space-y-2 md:space-y-4">
            <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold">
              Build Text to image SaaS App in React JS
            </h3>

            <p className="text-sm md:text-base max-w-[650px] text-muted-foreground">
              Master MERN Stack by building a Full Stack AI Text to Image SaaS
              App using React js, Mongodb, Node js, Express js and Stripe
              Payment
            </p>

            <div className="text-sm flex items-center gap-2">
              <p className="flex items-center gap-2">
                <Star className="size-5 text-yellow-500" /> 4.5
              </p>

              <p className="text-primary">(122 ratings)</p>

              <p className="text-muted-foreground">300 Student</p>
            </div>

            <p className="text-sm text-muted-foreground">
              Dibuat oleh{" "}
              <Link href={"/"} className="text-primary hover:underline">
                Ansori Dev
              </Link>
            </p>
          </div>

          <div>
            <div className="space-y-2">
              <h4 className="text-xl font-bold">Struktur Kursus</h4>
              <p className="text-sm">22 Sesi - 45 Pelajaran - 20 Total Jam</p>
            </div>

            <div>
              <CourseAccordion />
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-bold">Deskripsi</h4>
            <p className="text-sm md:text-base text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              doloribus nesciunt quas voluptatem reprehenderit nisi soluta.
              Consequuntur ut earum ducimus, eos alias reiciendis aspernatur
              inventore soluta maxime assumenda cumque aliquid?
            </p>
          </div>
        </div>
        <div className="lg:col-span-1">
          <CourseDetailCard />
        </div>
      </div>
    </section>
  );
};
export default DetailCoursePage;
