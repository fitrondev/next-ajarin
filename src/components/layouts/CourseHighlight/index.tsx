import CourseCard from "../CourseCard";

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
    <section className="py-10 md:py-20">
      <div className="container">
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
      </div>
    </section>
  );
};
export default CourseHighlight;
