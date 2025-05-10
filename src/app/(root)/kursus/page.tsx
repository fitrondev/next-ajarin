import CoursePagination from "@/components/layouts/Course/CoursePagination";
import CourseSearch from "@/components/layouts/Course/CourseSearch";
import CourseTitle from "@/components/layouts/Course/CourseTitle";
import CourseCard from "@/components/layouts/CourseCard";
import { courseData } from "@/components/layouts/CourseHighlight";

const CoursesPage = () => {
  return (
    <section className="py-5 md:py-10 lg:py-20">
      <div className="container space-y-5 md:space-y-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
          <CourseTitle />

          <CourseSearch />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-4">
          {courseData.map((item) => (
            <CourseCard
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              name={item.name}
              star={item.star}
              rating={item.rating}
              price={item.price}
            />
          ))}

          {courseData.map((item) => (
            <CourseCard
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              name={item.name}
              star={item.star}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>

        <div>
          <CoursePagination />
        </div>
      </div>
    </section>
  );
};
export default CoursesPage;
