import Title from "@/components/common/Title";
import CourseCard from "../CourseCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const courseData = [
  {
    id: 1,
    image: "/images/coursefallback.jpg",
    title: "Build Text to image SaaS App in React JS",
    name: "Ansori Dev",
    star: 4.5,
    rating: 100,
    price: 10.99,
  },
  {
    id: 2,
    image: "/images/coursefallback.jpg",
    title: "Build Text to image SaaS App in React JS",
    name: "Ansori Dev",
    star: 4.5,
    rating: 100,
    price: 10.99,
  },
  {
    id: 3,
    image: "/images/coursefallback.jpg",
    title: "Build Text to image SaaS App in React JS",
    name: "Ansori Dev",
    star: 4.5,
    rating: 100,
    price: 10.99,
  },
  {
    id: 4,
    image: "/images/coursefallback.jpg",
    title: "Build Text to image SaaS App in React JS",
    name: "Ansori Dev",
    star: 4.5,
    rating: 100,
    price: 10.99,
  },
];

const CourseHighlight = () => {
  return (
    <section className="py-5 md:py-10 lg:py-20">
      <div className="container space-y-5 md:space-y-10">
        <Title
          title="Belajar dari Ahlinya"
          subtitle="Temukan kursus yang sesuai dengan minat dan tujuan Anda!"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-4">
          {courseData.map((item) => (
            <CourseCard
              key={item.id}
              image={item.image}
              title={item.title}
              name={item.name}
              star={item.star}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>

        <div className="flex items-center justify-center">
          <Button variant={"outline"} size={"lg"} asChild>
            <Link href="/courses">Lihat Semua Kursus</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default CourseHighlight;
